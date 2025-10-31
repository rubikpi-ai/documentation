/**
 * 批量为 docs-en/docs 下所有 .md 文件添加或更新 custom_edit_url frontmatter 字段。
 * 仅处理 docs-en/docs 目录及其子目录，不处理 README.md 和 src/pages 等。
 * 若文件没有 frontmatter，将自动创建：
 * ---\ncustom_edit_url: <url>\n---\n
 * PowerShell 执行： node scripts/addCustomEditUrl.js
 */

const fs = require('fs');
const path = require('path');

const docsRoot = path.resolve(__dirname, '..', 'docs');
const baseUrl = 'https://github.com/rubikpi-ai/documentation/blob/main/docs-en/docs';

function collectMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files = files.concat(collectMarkdownFiles(full));
    } else if (e.isFile() && e.name.toLowerCase().endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

function computeEditUrl(file) {
  const rel = path.relative(docsRoot, file).replace(/\\/g, '/');
  return `${baseUrl}/${rel}`;
}

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const editUrl = computeEditUrl(file);

  if (content.startsWith('---')) {
    const endIndex = content.indexOf('\n---', 3);
    if (endIndex === -1) {
      console.warn('跳过(未找到 frontmatter 结束分隔符):', file);
      return false;
    }
    const fmBlock = content.slice(0, endIndex + 4);
    const lines = fmBlock.split(/\r?\n/);
    let hasField = false;
    for (let i = 1; i < lines.length - 1; i++) { // 跳过首尾 ---
      if (/^custom_edit_url\s*:/.test(lines[i])) {
        lines[i] = `custom_edit_url: ${editUrl}`;
        hasField = true;
        break;
      }
    }
    if (!hasField) {
      lines.splice(lines.length - 1, 0, `custom_edit_url: ${editUrl}`);
    }
    const newFm = lines.join('\n');
    content = newFm + content.slice(endIndex + 4);
  } else {
    const fm = `---\ncustom_edit_url: ${editUrl}\n---\n\n`;
    content = fm + content;
  }

  fs.writeFileSync(file, content, 'utf8');
  return true;
}

function main() {
  const files = collectMarkdownFiles(docsRoot);
  let changed = 0;
  files.forEach(f => {
    if (processFile(f)) changed++;
  });
  console.log(`已处理 ${changed} 个 Markdown 文件.`);
}

main();
