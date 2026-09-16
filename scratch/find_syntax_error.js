import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function checkFile(relPath) {
  const filePath = path.join(rootDir, relPath);
  const content = fs.readFileSync(filePath, 'utf8');

  const scripts = content.match(/<script>([\s\S]*?)<\/script>/gi);
  if (!scripts) {
    console.log(`No script tags found in ${relPath}`);
    return;
  }

  scripts.forEach((scriptTag, idx) => {
    const code = scriptTag.replace(/^<script>/i, '').replace(/<\/script>$/i, '');
    try {
      new vm.Script(code);
      console.log(`[OK] ${relPath} script #${idx + 1} syntax is valid.`);
    } catch (err) {
      console.error(`[SYNTAX ERROR] ${relPath} script #${idx + 1}:`, err.message);
      
      const codeLines = code.split('\n');
      const errLineMatch = err.stack.match(/evalmachine\.<anonymous>:(\d+)/);
      if (errLineMatch) {
        const lineNum = parseInt(errLineMatch[1], 10);
        console.error(`Line ${lineNum - 1}:`, codeLines[lineNum - 2]);
        console.error(`Line ${lineNum} (ERROR):`, codeLines[lineNum - 1]);
        console.error(`Line ${lineNum + 1}:`, codeLines[lineNum]);
      }
    }
  });
}

checkFile('scanner.html');
checkFile('scanner-grid.html');
checkFile('checkin.html');
