import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const content = fs.readFileSync(path.join(rootDir, 'scanner.html'), 'utf8');
const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/i);
if (!scriptMatch) process.exit(1);

const code = scriptMatch[1];
const lines = code.split('\n');

let openBraces = 0;
const stack = [];

lines.forEach((line, idx) => {
  for (let ch of line) {
    if (ch === '{') {
      openBraces++;
      stack.push({ lineNum: idx + 1, content: line.trim() });
    }
    if (ch === '}') {
      openBraces--;
      stack.pop();
    }
  }
});

console.log('Unclosed braces stack:');
console.log(stack);
