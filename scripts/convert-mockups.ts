import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import * as cheerio from 'cheerio';

export function getUrlHash(url: string): string {
  return crypto.createHash('sha256').update(url).digest('hex').slice(0, 16);
}

// Convert CSS style string to JSX style object string
export function styleStringToJsx(styleStr: string): string {
  if (!styleStr || !styleStr.trim()) return '{}';

  // Replace remote images in style if any
  const processedStyle = styleStr.replace(
    /url\(['"]?(https?:\/\/[^\s'")]+)['"]?\)/g,
    (_, url) => {
      const cleanUrl = url.replace(/[;,\.\)]+$/, '');
      const hash = getUrlHash(cleanUrl);
      return `url('/images/${hash}.webp')`;
    }
  );

  const declarations = processedStyle
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
  const styleObj: Record<string, string> = {};

  for (const decl of declarations) {
    const colonIdx = decl.indexOf(':');
    if (colonIdx === -1) continue;
    const rawKey = decl.slice(0, colonIdx).trim();
    const rawVal = decl.slice(colonIdx + 1).trim();

    let key = rawKey;
    if (key.startsWith('-ms-')) {
      key = 'ms' + key.slice(4).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    } else {
      key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    }

    styleObj[key] = rawVal;
  }

  return JSON.stringify(styleObj);
}

const ATTR_MAP: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  inputmode: 'inputMode',
  stddeviation: 'stdDeviation',
  patternunits: 'patternUnits',
  attributename: 'attributeName',
  repeatcount: 'repeatCount',
  gradientunits: 'gradientUnits',
  tabindex: 'tabIndex',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  srcset: 'srcSet',
  crossorigin: 'crossOrigin',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'fill-opacity': 'fillOpacity',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
};

const BOOLEAN_ATTRS = new Set([
  'disabled',
  'checked',
  'required',
  'multiple',
  'autofocus',
  'autoFocus',
  'readonly',
  'readOnly',
  'hidden',
  'selected',
  'open',
  'defer',
  'async',
  'loop',
  'muted',
  'autoplay',
]);

const TAG_MAP: Record<string, string> = {
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  clippath: 'clipPath',
  foreignobject: 'foreignObject',
  textpath: 'textPath',
  fegaussianblur: 'feGaussianBlur',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  fecolormatrix: 'feColorMatrix',
  feoffset: 'feOffset',
  feblend: 'feBlend',
  fedropshadow: 'feDropShadow',
};

const NUMERIC_ATTRS = new Set([
  'tabIndex',
  'colSpan',
  'rowSpan',
  'maxLength',
  'minLength',
  'size',
  'rows',
  'cols',
  'span',
  'start',
  'high',
  'low',
  'optimum',
]);

export function toPascalCase(str: string): string {
  return str
    .replace(/^[^a-zA-Z0-9]+/, '')
    .split(/[-_]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

export function convertMobileHtmlToReact(
  htmlPath: string,
  componentName: string,
  role: string
): string {
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const $ = cheerio.load(htmlContent, { xml: false });

  // 1. Remove scripts, meta, external font stylesheets, title
  $('script, meta, link[rel="stylesheet"], title').remove();

  // Fix followed_stores header bug from mockup
  if (htmlPath.includes('followed_stores')) {
    $('h1:contains("Order Tracking")').text('Followed Stores');
  }

  const isDashboard = role !== 'buyer';
  const isMobile = true;

  // 2. Dashboard Specific AST Adjustments
  let hasSidebar = false;
  if (isDashboard) {
    // A role must feel like ONE app: The shell renders once per role in RoleDashboardShell.
    // Converted dashboard screens render as CHILDREN inside the shell and must NOT
    // render their own fixed top header, aside drawer, or fixed bottom bar.
    $('header').remove();
    $('aside').remove();
    $('nav.fixed, nav[class*="bottom-0"], body > nav').remove();

    // Prevent wrapping on currency amounts ("UGX 1,420,000") across dashboard screens
    $('*').each((_, el) => {
      if ($(el).children().length === 0) {
        const text = $(el).text();
        if (/\b(?:UGX|USh)\b/i.test(text)) {
          const cls = $(el).attr('class') || '';
          if (!cls.includes('whitespace-nowrap')) {
            $(el).attr('class', `${cls} whitespace-nowrap`.trim());
          }
        }
      }
    });

    // Prevent header title wrapping
    $('h1, h2, h3').each((_, el) => {
      const cls = $(el).attr('class') || '';
      if (!cls.includes('whitespace-nowrap') && cls.includes('truncate')) {
        $(el).attr('class', `${cls} whitespace-nowrap`.trim());
      }
    });

    // Content area adjustments: remove hardcoded sidebar offsets from mockup bodies
    $('*').each((_, el) => {
      const cls = $(el).attr('class') || '';
      if (/\b(?:pl-60|pl-64|pl-72|pl-80)\b/.test(cls)) {
        $(el).attr('class', cls.replace(/\b(?:pl-60|pl-64|pl-72|pl-80)\b/g, 'pl-0'));
      }
      if (/\b(?:left-60|left-64|left-72|left-80)\b/.test(cls)) {
        $(el).attr('class', cls.replace(/\b(?:left-60|left-64|left-72|left-80)\b/g, 'left-0'));
      }
      if (/\b(?:ml-60|ml-64|ml-72|ml-80)\b/.test(cls)) {
        $(el).attr('class', cls.replace(/\b(?:ml-60|ml-64|ml-72|ml-80)\b/g, 'ml-0'));
      }
    });
  }

  // 3. Logo Replacement (Never show broken image)
  $('img').each((_, el) => {
    const alt = ($(el).attr('alt') || '').toLowerCase();
    const src = ($(el).attr('src') || '').toLowerCase();
    if (
      alt.includes('logo') ||
      src.includes('logo') ||
      alt.includes('swiftcart') ||
      src.includes('swiftcart')
    ) {
      if (alt.includes('icon') || src.includes('icon') || isMobile) {
        $(el).attr('src', '/brand/swiftcart-logo-icon.png');
      } else if (isDashboard) {
        $(el).attr('src', '/brand/swiftcart-logo-white.png');
      } else {
        $(el).attr('src', '/brand/logo-full.png');
      }
      $(el).attr('alt', 'SwiftCart');
    }
  });

  const ctx = {
    hasIcon: true,
    hasNavigate: false,
    hasAction: false,
    hasSidebar,
  };

  function processNode(node: any): string {
    if (node.type === 'text') {
      const text = node.data;
      if (!text || text.trim() === '') return text;
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;');
    }

    if (node.type === 'comment') return '';
    if (node.type !== 'tag') return '';

    const tagName = node.name.toLowerCase();

    // Style tag
    if (tagName === 'style') {
      const cssText = $(node).text();
      const cleanedCss = cssText.replace(/@import\s+url\([^)]+\);?/g, '');
      return `<style dangerouslySetInnerHTML={{ __html: \`${cleanedCss
        .replace(/`/g, '\\`')
        .replace(/\\/g, '\\\\')}\` }} />`;
    }

    // Material Symbols replacement
    const className = $(node).attr('class') || '';
    if (
      tagName === 'span' &&
      (className.includes('material-symbols-outlined') ||
        className.includes('material-symbols-rounded') ||
        className.includes('material-icons'))
    ) {
      let iconName = $(node).text().trim();
      if (iconName === 'theme_toggle_placeholder') {
        return `{theme === 'dark' ? <Icon name="light_mode" className="text-[20px]" /> : <Icon name="dark_mode" className="text-[20px]" />}`;
      }
      const isFilled =
        /FILL['"]?\s*:\s*1|font-variation-settings:\s*['"][^'"]*FILL[^'"]*1/i.test(
          $(node).attr('style') || ''
        );
      let cleanClass = className
        .replace(/material-symbols-(outlined|rounded)/g, '')
        .replace(/material-icons/g, '')
        .trim();
      return `<Icon name="${iconName}" ${isFilled ? 'filled ' : ''}${
        cleanClass ? `className="${cleanClass}" ` : ''
      }/>`;
    }

    const attrMap = new Map<string, string>();
    const attribs = node.attribs || {};

    for (const [rawKey, rawVal] of Object.entries(attribs)) {
      let key = rawKey.toLowerCase();
      let val = rawVal as string;

      if (key.startsWith('on')) {
        if (key === 'onsubmit') {
          attrMap.set('onSubmit', `onSubmit={(e) => e.preventDefault()}`);
        }
        continue;
      }

      if (ATTR_MAP[rawKey]) key = ATTR_MAP[rawKey];
      else if (ATTR_MAP[key]) key = ATTR_MAP[key];

      if (key === 'readonly' || key === 'readOnly') {
        attrMap.set('readOnly', 'readOnly={true}');
        continue;
      }

      if (key === 'contenteditable' || key === 'contentEditable') {
        attrMap.set('contentEditable', `contentEditable={${val !== 'false'}}`);
        continue;
      }

      if (BOOLEAN_ATTRS.has(key)) {
        attrMap.set(key, `${key}={true}`);
        continue;
      }

      if (NUMERIC_ATTRS.has(key) && !isNaN(Number(val)) && val.trim() !== '') {
        attrMap.set(key, `${key}={${Number(val)}}`);
        continue;
      }

      if (key === 'src') {
        if (val.startsWith('http://') || val.startsWith('https://')) {
          const hash = getUrlHash(val.replace(/[;,\.\)]+$/, ''));
          attrMap.set(key, `src="/images/${hash}.webp"`);
          continue;
        }
      }

      if (key === 'style') {
        const styleJsx = styleStringToJsx(val);
        attrMap.set(key, `style={${styleJsx}}`);
        continue;
      }

      // Sidebar drawer responsive classes
      if (key === 'className' && val.includes('dashboard-aside-drawer')) {
        const baseClass = val
          .replace(/dashboard-aside-drawer/g, '')
          .replace(/-translate-x-full/g, '')
          .replace(/\btranslate-x-0\b/g, '')
          .trim();
        attrMap.set(
          key,
          `className={\`${baseClass} \${drawerOpen ? 'translate-x-0 !translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-200 \${theme === 'dark' ? 'bg-[#0d1225] border-[#2f3448]/60' : 'bg-white border-slate-200'}\`}`
        );
        continue;
      }

      const escapedVal = val.replace(/"/g, '&quot;');
      attrMap.set(key, `${key}="${escapedVal}"`);
    }

    // Interactivity: buttons & links
    if (className.includes('sidebar-hamburger-btn') || attribs['id'] === 'drawer-trigger') {
      attrMap.set('onClick', 'onClick={() => setDrawerOpen(true)}');
    } else if (className.includes('sidebar-close-btn')) {
      attrMap.set('onClick', 'onClick={() => setDrawerOpen(false)}');
    } else if (className.includes('theme-toggle-btn')) {
      attrMap.set('onClick', 'onClick={() => toggleTheme()}');
    } else if (tagName === 'button' || tagName === 'a') {
      const text = $(node).text().toLowerCase();
      const aria = (attribs['aria-label'] || '').toLowerCase();
      const btnTitle = (attribs['title'] || '').toLowerCase();
      const combo = `${text} ${aria} ${btnTitle}`;

      if (
        combo.includes('dark_mode') ||
        combo.includes('light_mode') ||
        combo.includes('sun') ||
        combo.includes('moon')
      ) {
        attrMap.set('onClick', 'onClick={() => toggleTheme()}');
      } else if (
        hasSidebar &&
        (aria.includes('close') ||
          text.includes('close') ||
          $(node).find('span:contains("close")').length > 0 ||
          $(node).closest('aside').length > 0)
      ) {
        attrMap.set('onClick', 'onClick={() => setDrawerOpen(false)}');
      } else if (
        hasSidebar &&
        (aria.includes('menu') ||
          aria.includes('drawer') ||
          $(node).find('span:contains("menu")').length > 0 ||
          $(node).find('i:contains("menu")').length > 0)
      ) {
        attrMap.set('onClick', 'onClick={() => setDrawerOpen(true)}');
      }
    }

    const attrsString = Array.from(attrMap.values()).join(' ');
    const childrenStr = (node.children || []).map(processNode).join('');

    const voidTags = new Set([
      'area',
      'base',
      'br',
      'col',
      'embed',
      'hr',
      'img',
      'input',
      'link',
      'meta',
      'param',
      'source',
      'track',
      'wbr',
    ]);

    const finalTagName = TAG_MAP[tagName] || tagName;

    if (voidTags.has(finalTagName)) {
      return `<${finalTagName}${attrsString ? ' ' + attrsString : ''} />`;
    }

    return `<${finalTagName}${attrsString ? ' ' + attrsString : ''}>${childrenStr}</${finalTagName}>`;
  }

  const body = $('body');
  const targetNodes =
    body.length > 0 ? body.children().toArray() : $.root().children().toArray();
  const renderedChildren = targetNodes.map(processNode).join('\n');

  const importList: string[] = [
    hasSidebar
      ? "import React, { useState } from 'react';"
      : "import React from 'react';",
  ];
  importList.push(`import Icon from '../../../components/shared/Icon';`);

  if (isDashboard) {
    importList.push(`import { useDashboardTheme } from '../../../context/ThemeContext';`);
  }

  const componentCode = `// Auto-generated from ${htmlPath.replace(/\\/g, '/')}
${importList.join('\n')}

export interface ${componentName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${componentName}: React.FC<${componentName}Props> = (props) => {
  const onNavigate = props.onNavigate;
  const onAction = props.onAction;
  void onNavigate;
  void onAction;
  void Icon;
  ${isDashboard ? 'const { theme, toggleTheme } = useDashboardTheme();\n  void theme;\n  void toggleTheme;' : ''}
  ${hasSidebar ? 'const [drawerOpen, setDrawerOpen] = useState(false);' : ''}

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      ${hasSidebar ? `{drawerOpen && <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setDrawerOpen(false)} />}` : ''}
      ${renderedChildren}
    </div>
  );
};

export default ${componentName};
`;

  return componentCode;
}

export async function runConversionPipeline() {
  console.log('--- Starting Complete Mobile Screen Conversion for All Roles ---');

  const roles = ['buyer', 'seller', 'admin', 'super-admin', 'rider', 'hub'];
  let totalConverted = 0;

  for (const role of roles) {
    const roleMobileDir = path.resolve('design/mobile', role);
    if (!fs.existsSync(roleMobileDir)) continue;

    const baseOutDir = path.resolve('src/mockups', role);
    if (!fs.existsSync(baseOutDir)) fs.mkdirSync(baseOutDir, { recursive: true });

    const folders = fs
      .readdirSync(roleMobileDir)
      .filter((f) => fs.statSync(path.join(roleMobileDir, f)).isDirectory());

    console.log(`Role [${role}]: converting ${folders.length} screen folders...`);

    const exportedComponents: { name: string; folder: string }[] = [];

    for (const folder of folders) {
      const codeHtmlPath = path.join(roleMobileDir, folder, 'code.html');
      if (!fs.existsSync(codeHtmlPath)) {
        console.warn(`Missing code.html in ${codeHtmlPath}`);
        continue;
      }

      const compName = toPascalCase(folder);
      const screenOutDir = path.join(baseOutDir, compName);
      if (!fs.existsSync(screenOutDir)) {
        fs.mkdirSync(screenOutDir, { recursive: true });
      }

      // Generate Mobile.tsx
      const reactCode = convertMobileHtmlToReact(codeHtmlPath, compName, role);
      fs.writeFileSync(path.join(screenOutDir, 'Mobile.tsx'), reactCode, 'utf8');

      // Generate index.tsx
      const indexCode = `import React from 'react';
import Mobile from './Mobile';

export interface ${compName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${compName}: React.FC<${compName}Props> = (props) => {
  return <Mobile {...props} />;
};

export default ${compName};
`;
      fs.writeFileSync(path.join(screenOutDir, 'index.tsx'), indexCode, 'utf8');

      exportedComponents.push({ name: compName, folder });
      totalConverted++;
    }

    // Generate src/mockups/<role>/index.ts (only for non-buyer)
    if (role !== 'buyer') {
      const indexExports = exportedComponents
        .map((c) => `export { default as ${c.name} } from './${c.name}';`)
        .join('\n');
      fs.writeFileSync(path.join(baseOutDir, 'index.ts'), indexExports + '\n', 'utf8');
    }
  }

  console.log(`Total mobile screens converted: ${totalConverted}`);
}

if (process.argv[1]?.includes('convert-mockups')) {
  runConversionPipeline();
}
