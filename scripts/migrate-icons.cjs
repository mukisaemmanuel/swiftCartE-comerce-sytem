const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(walk(full));
    } else if (full.endsWith('.tsx') && !full.endsWith('Icon.tsx')) {
      files.push(full);
    }
  }
  return files;
}

const files = walk('src');
let modifiedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('material-symbols-rounded')) continue;

  // Match any span containing material-symbols-rounded in className
  // E.g.: <span className={`material-symbols-rounded ...`}>icon</span>
  // or <span className="absolute ... material-symbols-rounded ...">icon</span>
  const spanRegex = /<span\s+([^>]*className=(?:\{`[^`]*material-symbols-rounded[^`]*`\}|["'][^"']*material-symbols-rounded[^"']*["'])[^>]*)>\s*([a-zA-Z0-9_{}.-]+)\s*<\/span>/gs;

  let hasReplacements = false;
  const newContent = content.replace(spanRegex, (match, attrs, iconName) => {
    hasReplacements = true;
    
    // Extract className
    let classMatch = attrs.match(/className=(\{`[^`]*`\}|["'][^"']*["'])/);
    let classVal = '';
    let otherAttrs = attrs.replace(/className=(\{`[^`]*`\}|["'][^"']*["'])/, '').trim();

    if (classMatch) {
      let rawClass = classMatch[1];
      if (rawClass.startsWith('{`')) {
        let inside = rawClass.slice(2, -2).replace(/material-symbols-rounded/g, '').trim();
        classVal = `className={\`${inside}\`}`;
      } else {
        let inside = rawClass.slice(1, -1).replace(/material-symbols-rounded/g, '').trim();
        classVal = `className="${inside}"`;
      }
    }

    let nameProp = iconName.startsWith('{') && iconName.endsWith('}') 
      ? `name=${iconName.slice(1, -1)}` 
      : `name="${iconName}"`;

    let otherProps = otherAttrs ? ` ${otherAttrs}` : '';
    return `<Icon ${nameProp} ${classVal}${otherProps} />`;
  });

  if (hasReplacements) {
    let finalContent = newContent;
    if (!finalContent.includes("from '../components/shared/Icon'") &&
        !finalContent.includes("from '../../components/shared/Icon'") &&
        !finalContent.includes("from './components/shared/Icon'") &&
        !finalContent.includes("from './Icon'") &&
        !finalContent.includes('import { Icon }') &&
        !finalContent.includes('import Icon')) {
      
      const fileDir = path.dirname(file);
      const targetPath = path.resolve('src/components/shared/Icon');
      let rel = path.relative(fileDir, targetPath).replace(/\\/g, '/');
      if (!rel.startsWith('.')) rel = './' + rel;

      const lastImportIndex = finalContent.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfImportLine = finalContent.indexOf('\n', lastImportIndex);
        finalContent = finalContent.slice(0, endOfImportLine + 1) + 
                       `import { Icon } from '${rel}';\n` + 
                       finalContent.slice(endOfImportLine + 1);
      } else {
        finalContent = `import { Icon } from '${rel}';\n` + finalContent;
      }
    }

    fs.writeFileSync(file, finalContent, 'utf8');
    modifiedCount++;
  }
}

console.log(`Successfully migrated ${modifiedCount} more files to <Icon />!`);
