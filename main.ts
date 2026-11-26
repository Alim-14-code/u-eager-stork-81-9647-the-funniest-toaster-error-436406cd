import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const entryPath = path.join(__dirname, 'entry.txt');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = path.join(outputDir, 'entry.txt');

const line = fs.readFileSync(entryPath, 'utf8').trim();

if (line.length === 0) {
  throw new Error('entry.txt is empty');
}
if (line.length > 120) {
  throw new Error(`entry is ${line.length} characters, over the 120-character limit`);
}
if (line.includes('\n')) {
  throw new Error('entry must be a single line');
}

const outText = line;
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, outText, 'utf8');
console.log(`Entry saved — ${outText.length} characters written to ${outputPath}`);
