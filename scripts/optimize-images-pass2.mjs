import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const SRC = 'public/images';
const OUT = 'public/images-v2';
const THRESHOLD = 400 * 1024;
const MAX_WIDTH = 1400;
const JPG_QUALITY = 72;
const PNG_QUALITY = 75;
const WEBP_QUALITY = 72;

const fmt = (n) => (n / 1024).toFixed(1) + ' KB';

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function processImage(srcPath) {
  const ext = path.extname(srcPath).toLowerCase();
  const rel = path.relative(SRC, srcPath);
  const destPath = path.join(OUT, rel);
  await fs.mkdir(path.dirname(destPath), { recursive: true });

  const stat = await fs.stat(srcPath);
  const originalSize = stat.size;

  const shouldRecompress =
    originalSize > THRESHOLD && ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);

  if (!shouldRecompress) {
    await fs.copyFile(srcPath, destPath);
    return { rel, originalSize, newSize: originalSize, skipped: true };
  }

  const meta = await sharp(srcPath).metadata();
  let pipeline = sharp(srcPath);
  const needsResize = meta.width && meta.width > MAX_WIDTH;
  if (needsResize) pipeline = pipeline.resize({ width: MAX_WIDTH });

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  } else {
    pipeline = pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();
  if (buffer.length >= originalSize) {
    await fs.copyFile(srcPath, destPath);
    return { rel, originalSize, newSize: originalSize, skipped: true, meta };
  }
  await fs.writeFile(destPath, buffer);
  return { rel, originalSize, newSize: buffer.length, skipped: false, meta, resized: needsResize };
}

await fs.rm(OUT, { recursive: true, force: true });
const files = await walk(SRC);

let totalBefore = 0;
let totalAfter = 0;
const processed = [];

for (const file of files) {
  try {
    const r = await processImage(file);
    totalBefore += r.originalSize;
    totalAfter += r.newSize;
    if (!r.skipped) processed.push(r);
  } catch (e) {
    console.error(`FAILED ${file}:`, e.message);
  }
}

processed.sort((a, b) => (b.originalSize - b.newSize) - (a.originalSize - a.newSize));

console.log('\n=== Pass 2: aggressive (width<=1400, q=72) ===\n');
for (const r of processed) {
  const saved = r.originalSize - r.newSize;
  const pct = ((saved / r.originalSize) * 100).toFixed(0);
  const dims = r.meta?.width ? `${r.meta.width}x${r.meta.height}` : '-';
  console.log(`${r.rel.padEnd(34)} ${dims.padEnd(12)} ${fmt(r.originalSize).padStart(10)} -> ${fmt(r.newSize).padStart(10)}  -${pct}%`);
}

console.log('\n--- Total ---');
console.log(`Before: ${fmt(totalBefore)}`);
console.log(`After:  ${fmt(totalAfter)}`);
console.log(`Saved:  ${fmt(totalBefore - totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`);
console.log(`\nOutput at: ${OUT}`);
