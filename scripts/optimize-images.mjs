import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const SRC = 'public/images';
const OUT = 'public/images-optimized';
const MAX_WIDTH = 1920;
const JPG_QUALITY = 82;
const PNG_QUALITY = 85;

const fmt = (n) => (n / 1024).toFixed(1) + ' KB';

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function processImage(srcPath) {
  const ext = path.extname(srcPath).toLowerCase();
  const rel = path.relative(SRC, srcPath);
  const destPath = path.join(OUT, rel);
  await fs.mkdir(path.dirname(destPath), { recursive: true });

  const statBefore = await fs.stat(srcPath);
  const originalSize = statBefore.size;

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    await fs.copyFile(srcPath, destPath);
    return { rel, originalSize, newSize: originalSize, skipped: true, meta: {} };
  }

  const image = sharp(srcPath);
  const meta = await image.metadata();

  let pipeline = sharp(srcPath);
  const needsResize = meta.width && meta.width > MAX_WIDTH;
  if (needsResize) pipeline = pipeline.resize({ width: MAX_WIDTH });

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true });
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
const rows = [];

for (const file of files) {
  try {
    const result = await processImage(file);
    if (!result) continue;
    totalBefore += result.originalSize;
    totalAfter += result.newSize;
    rows.push(result);
  } catch (err) {
    console.error(`FAILED ${file}:`, err.message);
  }
}

rows.sort((a, b) => (b.originalSize - b.newSize) - (a.originalSize - a.newSize));

console.log('\n=== Image optimization report ===\n');
for (const r of rows) {
  const saved = r.originalSize - r.newSize;
  const pct = r.originalSize > 0 ? ((saved / r.originalSize) * 100).toFixed(0) : '0';
  const dims = r.meta.width ? `${r.meta.width}x${r.meta.height}` : '-';
  const tag = r.skipped ? 'skip' : (r.resized ? 'resize' : 'recompress');
  console.log(
    `${tag.padEnd(10)} ${r.rel.padEnd(32)} ${dims.padEnd(12)} ${fmt(r.originalSize).padStart(10)} -> ${fmt(r.newSize).padStart(10)}  -${pct}%`,
  );
}

console.log('\n--- Total ---');
console.log(`Before: ${fmt(totalBefore)}`);
console.log(`After:  ${fmt(totalAfter)}`);
console.log(`Saved:  ${fmt(totalBefore - totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`);
console.log(`\nOptimized files at: ${OUT}`);
