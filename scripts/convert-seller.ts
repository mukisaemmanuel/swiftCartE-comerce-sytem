import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import * as cheerio from 'cheerio';
import { sellerRoutes } from '../src/routes/seller';

function getUrlHash(url: string): string {
  return crypto.createHash('sha256').update(url).digest('hex').slice(0, 16);
}

function styleStringToJsx(styleStr: string): string {
  if (!styleStr || !styleStr.trim()) return '{}';

  let processedStyle = styleStr.replace(
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

function pascalCase(str: string): string {
  return str
    .replace(/^\/seller\/?/, '')
    .split(/[-_]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

export function convertSellerHtmlToReact(
  htmlPath: string,
  componentName: string,
  screenName: string,
  sizeName: string,
  isIndividualScreen = false
): string {
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const $ = cheerio.load(htmlContent, { xml: false });

  // Remove scripts, meta, title, etc.
  $('script').remove();
  $('meta').remove();
  $('link[rel="stylesheet"]').remove();
  $('title').remove();

  const ctx = {
    hasIcon: false,
    hasAssetBase: false,
    hasNavigate: false,
    hasAction: false,
    hasThemeToggle: false,
  };

  function processNode(node: any): string {
    if (node.type === 'text') {
      const text = node.data;
      if (!text || text.trim() === '') return text;
      // Escape JSX specials
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

    // Skip html, head, body wrapper tags but process children
    if (['html', 'head', 'body'].includes(tagName)) {
      return (node.children || []).map(processNode).join('');
    }

    if (tagName === 'style') {
      const cssText = $(node).text();
      const cleanedCss = cssText.replace(/@import\s+url\([^)]+\);?/g, '');
      return `<style dangerouslySetInnerHTML={{ __html: \`${cleanedCss
        .replace(/`/g, '\\`')
        .replace(/\\/g, '\\\\')}\` }} />`;
    }

    // Material Symbols icon <span> replacement
    const className = $(node).attr('class') || '';
    if (
      tagName === 'span' &&
      (className.includes('material-symbols-outlined') ||
        className.includes('material-symbols-rounded'))
    ) {
      ctx.hasIcon = true;
      const iconName = $(node).text().trim();
      const styleAttr = $(node).attr('style') || '';
      const isFilled =
        /FILL['"]?\s*:\s*1|font-variation-settings:\s*['"][^'"]*FILL[^'"]*1/i.test(styleAttr);

      let cleanClass = className.replace(/material-symbols-(outlined|rounded)/g, '').trim();

      return `<Icon name="${iconName}" ${isFilled ? 'filled ' : ''}${
        cleanClass ? `className="${cleanClass}" ` : ''
      }/>`;
    }

    // Build attributes
    const attrMap = new Map<string, string>();
    const attribs = node.attribs || {};

    for (const [rawKey, rawVal] of Object.entries(attribs)) {
      const lowerKey = rawKey.toLowerCase();
      if (
        lowerKey === 'true' ||
        lowerKey === 'false' ||
        lowerKey === 'undefined' ||
        lowerKey === 'null' ||
        !/^[a-zA-Z_:][a-zA-Z0-9_.:-]*$/.test(rawKey)
      ) {
        continue;
      }

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
          ctx.hasAssetBase = true;
          const hash = getUrlHash(val.replace(/[;,\.\)]+$/, ''));
          attrMap.set(key, `src={\`\${assetBase}/images/${hash}.webp\`}`);
          continue;
        }
      }

      if (key === 'style') {
        const styleJsx = styleStringToJsx(val);
        attrMap.set(key, `style={${styleJsx}}`);
        continue;
      }

      const escapedVal = val.replace(/"/g, '&quot;');
      attrMap.set(key, `${key}="${escapedVal}"`);
    }

    // Interactivity: buttons and links
    if (tagName === 'button' || tagName === 'a') {
      const text = $(node).text().toLowerCase();
      const aria = (attribs['aria-label'] || '').toLowerCase();
      const btnTitle = (attribs['title'] || '').toLowerCase();
      const combo = `${text} ${aria} ${btnTitle}`;

      // Check if theme toggle
      if (
        combo.includes('dark_mode') ||
        combo.includes('light_mode') ||
        combo.includes('sun') ||
        combo.includes('moon')
      ) {
        ctx.hasThemeToggle = true;
        attrMap.set('onClick', 'onClick={() => toggleTheme()}');
      } else if (!attrMap.has('onClick')) {
        // Seller navigation routes
        if (combo.includes('overview') || combo.includes('dashboard')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/overview-seller'); }}`);
        } else if (combo.includes('orders') || combo.includes('order')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/orders-seller'); }}`);
        } else if (combo.includes('products') || combo.includes('inventory') || combo.includes('catalog')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/products-seller'); }}`);
        } else if (combo.includes('add product') || combo.includes('new product')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/add-product-step-1-photos-seller'); }}`);
        } else if (combo.includes('rider') || combo.includes('delivery') || combo.includes('logistics') || combo.includes('fleet')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/riders-seller'); }}`);
        } else if (combo.includes('return') || combo.includes('dispute')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/returns-disputes-seller'); }}`);
        } else if (combo.includes('wallet') || combo.includes('payout') || combo.includes('earnings') || combo.includes('balance')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-wallet-payouts'); }}`);
        } else if (combo.includes('analytics') || combo.includes('performance') || combo.includes('stats')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/analytics-seller'); }}`);
        } else if (combo.includes('discount') || combo.includes('promo') || combo.includes('ads') || combo.includes('campaign')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/discounts-ads-seller'); }}`);
        } else if (combo.includes('store') || combo.includes('profile') || combo.includes('kyc') || combo.includes('settings')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/store-profile-seller'); }}`);
        } else if (combo.includes('notification')) {
          ctx.hasNavigate = true;
          attrMap.set('onClick', `onClick={(e) => { e.preventDefault(); onNavigate?.('/seller/seller-notifications'); }}`);
        } else {
          attrMap.set('onClick', `onClick={() => alertToast('Action triggered')}`);
        }
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
  const targetNodes = body.length > 0 ? body.children().toArray() : $.root().children().toArray();
  const renderedChildren = targetNodes.map(processNode).join('\n');

  const importList: string[] = ["import React, { useState } from 'react';"];
  if (ctx.hasIcon) {
    const iconRel = isIndividualScreen
      ? '../../../../components/shared/Icon'
      : '../../../components/shared/Icon';
    importList.push(`import Icon from '${iconRel}';`);
  }
  const themeRel = isIndividualScreen
    ? '../../../../context/ThemeContext'
    : '../../../context/ThemeContext';
  importList.push(`import { useDashboardTheme } from '${themeRel}';`);

  const componentCode = `// Auto-generated from ${htmlPath.replace(/\\/g, '/')}
${importList.join('\n')}

export interface ${componentName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${componentName}: React.FC<${componentName}Props> = (props) => {
  ${ctx.hasNavigate ? 'const onNavigate = props.onNavigate;' : ''}
  ${ctx.hasAction ? 'const onAction = props.onAction;' : ''}
  const { theme${ctx.hasThemeToggle ? ', toggleTheme' : ''} } = useDashboardTheme();
  ${ctx.hasAssetBase ? "const assetBase = '';" : ''}
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };
  return (
    <div className={\`font-body-md text-body-md antialiased pt-safe pb-safe min-h-screen flex flex-col relative w-full overflow-x-hidden \${theme === 'dark' ? 'bg-[#0f172a] text-[#f9fafb]' : 'bg-[#f8fafc] text-[#0f172a]'}\`}>
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}
      ${renderedChildren}
    </div>
  );
};

export default ${componentName};
`;

  return componentCode;
}

export function runSellerConversion() {
  console.log('--- Starting Exact Mockup Conversion for Seller Dashboard ---');

  const baseOutDir = path.resolve('src/mockups/seller');
  const screensOutDir = path.join(baseOutDir, 'screens');

  if (!fs.existsSync(screensOutDir)) {
    fs.mkdirSync(screensOutDir, { recursive: true });
  }

  // 1. Convert EVERY individual screen folder in design/<size>/seller/<screen>
  const sizes = ['mobile', 'tablet', 'desktop'] as const;
  let individualCount = 0;

  for (const size of sizes) {
    const dir = path.resolve(`design/${size}/seller`);
    if (!fs.existsSync(dir)) continue;

    for (const folder of fs.readdirSync(dir)) {
      const codeHtmlPath = path.join(dir, folder, 'code.html');
      if (fs.existsSync(codeHtmlPath)) {
        const destDir = path.join(screensOutDir, folder);
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        const componentCode = convertSellerHtmlToReact(
          codeHtmlPath,
          'Screen',
          folder,
          size,
          true
        );
        fs.writeFileSync(path.join(destDir, 'index.tsx'), componentCode, 'utf8');
        individualCount++;
      }
    }
  }

  console.log(`Converted ${individualCount} individual seller screen folders.`);

  // 2. Generate canonical responsive screen components for all 49 seller routes
  const missingSizesLog: {
    screen: string;
    missing: string[];
    available: string[];
  }[] = [];

  for (const r of sellerRoutes) {
    const compName = pascalCase(r.path) || 'SellerOverview';
    const screenDir = path.join(baseOutDir, compName);
    if (!fs.existsSync(screenDir)) {
      fs.mkdirSync(screenDir, { recursive: true });
    }

    const available: string[] = [];
    const missing: string[] = [];

    // Mobile
    if (r.designFiles.mobile) {
      const codePath = path.resolve(r.designFiles.mobile, 'code.html');
      if (fs.existsSync(codePath)) {
        const code = convertSellerHtmlToReact(codePath, 'Mobile', compName, 'mobile');
        fs.writeFileSync(path.join(screenDir, 'Mobile.tsx'), code, 'utf8');
        available.push('mobile');
      } else {
        missing.push('mobile');
      }
    } else {
      missing.push('mobile');
    }

    // Tablet
    if (r.designFiles.tablet) {
      const codePath = path.resolve(r.designFiles.tablet, 'code.html');
      if (fs.existsSync(codePath)) {
        const code = convertSellerHtmlToReact(codePath, 'Tablet', compName, 'tablet');
        fs.writeFileSync(path.join(screenDir, 'Tablet.tsx'), code, 'utf8');
        available.push('tablet');
      } else {
        missing.push('tablet');
      }
    } else {
      missing.push('tablet');
    }

    // Desktop
    if (r.designFiles.desktop) {
      const codePath = path.resolve(r.designFiles.desktop, 'code.html');
      if (fs.existsSync(codePath)) {
        const code = convertSellerHtmlToReact(codePath, 'Desktop', compName, 'desktop');
        fs.writeFileSync(path.join(screenDir, 'Desktop.tsx'), code, 'utf8');
        available.push('desktop');
      } else {
        missing.push('desktop');
      }
    } else {
      missing.push('desktop');
    }

    if (missing.length > 0) {
      missingSizesLog.push({ screen: compName, missing, available });
    }

    // Generate responsive index.tsx with fallback to nearest available size
    const imports: string[] = [];
    if (available.includes('mobile')) imports.push(`import Mobile from './Mobile';`);
    if (available.includes('tablet')) imports.push(`import Tablet from './Tablet';`);
    if (available.includes('desktop')) imports.push(`import Desktop from './Desktop';`);

    const getRenderFor = (target: 'mobile' | 'tablet' | 'desktop'): string => {
      if (target === 'mobile') {
        if (available.includes('mobile')) return '<Mobile {...props} />';
        if (available.includes('tablet')) return '<Tablet {...props} />';
        if (available.includes('desktop')) return '<Desktop {...props} />';
      }
      if (target === 'tablet') {
        if (available.includes('tablet')) return '<Tablet {...props} />';
        if (available.includes('desktop')) return '<Desktop {...props} />';
        if (available.includes('mobile')) return '<Mobile {...props} />';
      }
      if (target === 'desktop') {
        if (available.includes('desktop')) return '<Desktop {...props} />';
        if (available.includes('tablet')) return '<Tablet {...props} />';
        if (available.includes('mobile')) return '<Mobile {...props} />';
      }
      return 'null';
    };

    const indexContent = `// Auto-generated responsive container for ${compName}
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
${imports.join('\n')}

export interface ${compName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${compName}: React.FC<${compName}Props> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return ${getRenderFor('mobile')};
  }

  if (breakpoint === 'tablet') {
    return ${getRenderFor('tablet')};
  }

  return ${getRenderFor('desktop')};
};

export default ${compName};
`;

    fs.writeFileSync(path.join(screenDir, 'index.tsx'), indexContent, 'utf8');
  }

  // 3. Update docs/MISSING-SIZES.md
  let missingDoc = '\n## Seller Screens Missing Sizes\n\n';
  missingDoc += '| Screen | Role | Available Sizes | Missing Sizes | Fallback Rule |\n';
  missingDoc += '| --- | --- | --- | --- | --- |\n';

  for (const item of missingSizesLog) {
    missingDoc += `| **${item.screen}** | seller | ${item.available.join(', ')} | ${item.missing.join(', ')} | nearest available |\n`;
  }

  fs.appendFileSync(path.resolve('docs/MISSING-SIZES.md'), missingDoc, 'utf8');
  console.log(`Updated docs/MISSING-SIZES.md with seller entries.`);

  // 4. Generate src/mockups/seller/index.ts
  let exportCode = `// Auto-generated exports for Seller mockups\n\n`;
  for (const r of sellerRoutes) {
    const compName = pascalCase(r.path) || 'SellerOverview';
    exportCode += `export { ${compName} } from './${compName}';\n`;
  }
  fs.writeFileSync(path.join(baseOutDir, 'index.ts'), exportCode, 'utf8');
  console.log(`Saved src/mockups/seller/index.ts with 49 exports.`);
}

runSellerConversion();
