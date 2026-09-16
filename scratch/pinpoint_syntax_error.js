import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function pinpoint(relPath) {
  const filePath = path.join(rootDir, relPath);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match script tag content
  const startTag = '<script>';
  const endTag = '</script>';
  const startIndex = content.indexOf(startTag);
  const endIndex = content.lastIndexOf(endTag);

  if (startIndex === -1 || endIndex === -1) return;

  const scriptCode = content.substring(startIndex + startTag.length, endIndex);
  const fileLines = content.substring(0, startIndex).split('\n');
  const baseLineNumber = fileLines.length;

  const scriptLines = scriptCode.split('\n');

  for (let i = 1; i <= scriptLines.length; i++) {
    const partialCode = scriptLines.slice(0, i).join('\n');
    try {
      new vm.Script(partialCode);
    } catch (err) {
      if (!err.message.includes('Unexpected end of input') && !err.message.includes('Unterminated')) {
        const actualLine = baseLineNumber + i - 1;
        console.log(`[FOUND SYNTAX ERROR] ${relPath} line ${actualLine}: ${err.message}`);
        console.log(`Line ${actualLine - 1}: ${scriptLines[i - 2]}`);
        console.log(`Line ${actualLine}: ${scriptLines[i - 1]}`);
        console.log(`Line ${actualLine + 1}: ${scriptLines[i]}`);
        break;
      }
    }
  }
}

pinpoint('scanner.html');
pinpoint('scanner-grid.html');
