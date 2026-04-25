import sharp from 'sharp';
import { promises as fs } from 'fs';

const SRC = 'public/images/countries/Rome.jpg';
const TMP = 'public/images/countries/Rome.tmp.jpg';

const stat = await fs.stat(SRC);
console.log('Before:', (stat.size / 1024).toFixed(1), 'KB');

const buf = await sharp(SRC).resize({ width: 1200 }).jpeg({ quality: 72, mozjpeg: true }).toBuffer();
await fs.writeFile(TMP, buf);
await fs.rm(SRC);
await fs.rename(TMP, SRC);

const after = await fs.stat(SRC);
console.log('After: ', (after.size / 1024).toFixed(1), 'KB');
console.log('Saved: ', ((stat.size - after.size) / 1024).toFixed(1), 'KB');
