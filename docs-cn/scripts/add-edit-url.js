const fs = require('fs');
const path = require('path');

const docsRoot = path.resolve(__dirname, '..', 'docs'); // ../docs relative to scripts folder
const baseUrl = 'https://github.com/rubikpi-ai/documentation/blob/main/docs-cn/docs';

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.isFile() && e.name.toLowerCase().endsWith('.md')) processFile(full);
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(docsRoot, filePath).split(path.sep).join('/'); // forward slashes
  const editUrlLine = `custom_edit_url: ${baseUrl}/${relPath}`;

  if (content.startsWith('---')) {
    const endIndex = content.indexOf('\n---', 3); // find closing ---
    if (endIndex !== -1) {
      const fm = content.substring(0, endIndex + 4); // include closing --- and newline after it
      if (/^custom_edit_url:/m.test(fm)) {
        // replace existing line
        const newFm = fm.replace(/^custom_edit_url:.*$/m, editUrlLine);
        content = newFm + content.substring(endIndex + 4);
      } else {
        // insert before closing --- (just before endIndex)
        const beforeClosing = fm.slice(0, -4); // remove closing ---
        const newFm = beforeClosing.replace(/\n?$/,'') + `\n${editUrlLine}\n---`;
        content = newFm + content.substring(endIndex + 4);
      }
    } else {
      // malformed frontmatter: treat as no frontmatter
      content = `---\n${editUrlLine}\n---\n` + content.replace(/^---/, '');
    }
  } else {
    content = `---\n${editUrlLine}\n---\n` + content;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated', relPath);
}

walk(docsRoot);
console.log('Done.');
