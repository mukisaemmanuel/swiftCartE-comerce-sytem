import fs from 'fs';
import path from 'path';
import { convertMobileHtmlToReact, toPascalCase } from './convert-mockups';

async function main() {
  console.log('=== Converting Desktop Mockups for All Dashboard Roles ===');
  const roles = ['seller', 'admin', 'super-admin', 'rider', 'hub'];
  let totalConverted = 0;

  for (const role of roles) {
    const roleDesktopDir = path.resolve('design/desktop', role);
    if (!fs.existsSync(roleDesktopDir)) {
      console.log(`Directory not found: ${roleDesktopDir}`);
      continue;
    }

    const baseOutDir = path.resolve('src/mockups', role);
    if (!fs.existsSync(baseOutDir)) fs.mkdirSync(baseOutDir, { recursive: true });

    const folders = fs
      .readdirSync(roleDesktopDir)
      .filter((f) => fs.statSync(path.join(roleDesktopDir, f)).isDirectory());

    console.log(`Role [${role}]: found ${folders.length} desktop screen folders...`);

    for (const folder of folders) {
      const codeHtmlPath = path.join(roleDesktopDir, folder, 'code.html');
      if (!fs.existsSync(codeHtmlPath)) {
        console.warn(`Missing code.html in ${codeHtmlPath}`);
        continue;
      }

      const compName = toPascalCase(folder);
      const screenOutDir = path.join(baseOutDir, compName);
      if (!fs.existsSync(screenOutDir)) {
        fs.mkdirSync(screenOutDir, { recursive: true });
      }

      // Generate Desktop.tsx
      const reactCode = convertMobileHtmlToReact(codeHtmlPath, 'Desktop', role);
      fs.writeFileSync(path.join(screenOutDir, 'Desktop.tsx'), reactCode, 'utf8');

      // Check which sizes exist
      const indexPath = path.join(screenOutDir, 'index.tsx');
      const mobilePath = path.join(screenOutDir, 'Mobile.tsx');
      const tabletPath = path.join(screenOutDir, 'Tablet.tsx');

      const hasMobile = fs.existsSync(mobilePath);
      const hasTablet = fs.existsSync(tabletPath);

      let indexCode = '';
      if (hasMobile && hasTablet) {
        indexCode = `import React from 'react';
import Mobile from './Mobile';
import Tablet from './Tablet';
import Desktop from './Desktop';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

export interface ${compName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${compName}: React.FC<${compName}Props> = (props) => {
  const breakpoint = useBreakpoint();
  if (breakpoint === 'desktop') {
    return <Desktop {...props} />;
  }
  if (breakpoint === 'tablet') {
    return <Tablet {...props} />;
  }
  return <Mobile {...props} />;
};

export default ${compName};
`;
      } else if (hasTablet) {
        indexCode = `import React from 'react';
import Tablet from './Tablet';
import Desktop from './Desktop';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

export interface ${compName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${compName}: React.FC<${compName}Props> = (props) => {
  const breakpoint = useBreakpoint();
  if (breakpoint === 'desktop') {
    return <Desktop {...props} />;
  }
  return <Tablet {...props} />;
};

export default ${compName};
`;
      } else if (hasMobile) {
        indexCode = `import React from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

export interface ${compName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${compName}: React.FC<${compName}Props> = (props) => {
  const breakpoint = useBreakpoint();
  if (breakpoint === 'desktop') {
    return <Desktop {...props} />;
  }
  return <Mobile {...props} />;
};

export default ${compName};
`;
      } else {
        indexCode = `import React from 'react';
import Desktop from './Desktop';

export interface ${compName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${compName}: React.FC<${compName}Props> = (props) => {
  return <Desktop {...props} />;
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
      .map((item) => `export * from './${item}';`)
      .join('\n');

    fs.writeFileSync(path.join(baseOutDir, 'index.ts'), indexExports + '\n', 'utf8');
    console.log(`Role [${role}]: successfully indexed ${allScreens.length} components.`);
  }

  console.log(`\nDONE: Successfully converted ${totalConverted} desktop mockups.`);
}

main().catch(console.error);
