import fs from 'fs';
import path from 'path';
import { convertMobileHtmlToReact, toPascalCase } from './convert-mockups';

async function main() {
  console.log('=== Converting Tablet Mockups for All Dashboard Roles ===');
  const roles = ['seller', 'admin', 'super-admin', 'rider', 'hub'];
  let totalConverted = 0;

  for (const role of roles) {
    const roleTabletDir = path.resolve('design/tablet', role);
    if (!fs.existsSync(roleTabletDir)) {
      console.log(`Directory not found: ${roleTabletDir}`);
      continue;
    }

    const baseOutDir = path.resolve('src/mockups', role);
    if (!fs.existsSync(baseOutDir)) fs.mkdirSync(baseOutDir, { recursive: true });

    const folders = fs
      .readdirSync(roleTabletDir)
      .filter((f) => fs.statSync(path.join(roleTabletDir, f)).isDirectory());

    console.log(`Role [${role}]: found ${folders.length} tablet screen folders...`);

    for (const folder of folders) {
      const codeHtmlPath = path.join(roleTabletDir, folder, 'code.html');
      if (!fs.existsSync(codeHtmlPath)) {
        console.warn(`Missing code.html in ${codeHtmlPath}`);
        continue;
      }

      const compName = toPascalCase(folder);
      const screenOutDir = path.join(baseOutDir, compName);
      if (!fs.existsSync(screenOutDir)) {
        fs.mkdirSync(screenOutDir, { recursive: true });
      }

      // Generate Tablet.tsx
      const reactCode = convertMobileHtmlToReact(codeHtmlPath, 'Tablet', role);
      fs.writeFileSync(path.join(screenOutDir, 'Tablet.tsx'), reactCode, 'utf8');

      // Check if index.tsx exists
      const indexPath = path.join(screenOutDir, 'index.tsx');
      const mobilePath = path.join(screenOutDir, 'Mobile.tsx');

      let indexCode = '';
      if (fs.existsSync(mobilePath)) {
        // Both Mobile and Tablet exist in this folder!
        indexCode = `import React from 'react';
import Mobile from './Mobile';
import Tablet from './Tablet';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

export interface ${compName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${compName}: React.FC<${compName}Props> = (props) => {
  const breakpoint = useBreakpoint();
  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }
  return <Mobile {...props} />;
};

export default ${compName};
`;
      } else {
        // Tablet only
        indexCode = `import React from 'react';
import Tablet from './Tablet';

export interface ${compName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${compName}: React.FC<${compName}Props> = (props) => {
  return <Tablet {...props} />;
};

export default ${compName};
`;
      }

      fs.writeFileSync(indexPath, indexCode, 'utf8');
      totalConverted++;
    }

    // Now re-generate src/mockups/<role>/index.ts exporting ALL components in that folder
    const allScreens = fs
      .readdirSync(baseOutDir)
      .filter((item) => {
        const itemPath = path.join(baseOutDir, item);
        return fs.statSync(itemPath).isDirectory() && fs.existsSync(path.join(itemPath, 'index.tsx'));
      });

    const indexExports = allScreens
      .map((screen) => `export { default as ${screen} } from './${screen}';`)
      .sort()
      .join('\n');

    fs.writeFileSync(path.join(baseOutDir, 'index.ts'), indexExports + '\n', 'utf8');
    console.log(`Role [${role}]: updated index.ts with ${allScreens.length} total screens.`);
  }

  console.log(`=== Done. Converted ${totalConverted} tablet screens. ===`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
