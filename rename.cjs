const fs = require('fs');
const path = require('path');

const targetDir = __dirname;
const excludeDirs = ['node_modules', '.git', 'dist', '.gemini', '.tempmediaStorage'];
const fileExtensions = ['.js', '.ts', '.tsx', '.html', '.json', '.css', '.md'];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const original = content;
  
  // Replacements
  content = content.replace(/Avorix AI/g, 'Aeviq AI');
  content = content.replace(/Avorix/g, 'Aeviq');
  content = content.replace(/avorix\.ai/g, 'aeviq.ai');
  content = content.replace(/avorix-ai/g, 'aeviq-ai');
  content = content.replace(/avorix/g, 'aeviq');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        processDirectory(fullPath);
      }
    } else {
      const ext = path.extname(fullPath);
      if (fileExtensions.includes(ext) || file === 'vercel.json') {
        replaceInFile(fullPath);
      }
    }
  }
}

processDirectory(targetDir);
console.log('Renaming complete.');
