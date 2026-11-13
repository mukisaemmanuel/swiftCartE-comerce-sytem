const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(walk(full));
    } else if (full.endsWith('.ts') || full.endsWith('.tsx') || full.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const icons = new Set();
const filledIcons = new Set();

const allSourceFiles = [...walk('src'), ...walk('design')];

for (const file of allSourceFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // match <span class="material-symbols-outlined...">name</span>
  const regexOutlined = /material-symbols-outlined[^>]*>([\s\S]*?)<\/span>/g;
  let match;
  while ((match = regexOutlined.exec(content)) !== null) {
    const fullTag = match[0];
    const name = match[1].trim();
    if (name && !name.includes('<') && !name.includes('${') && name.length < 50) {
      icons.add(name);
      if (/font-variation-settings:\s*['"]?[^'"]*FILL[^'"]*1/i.test(fullTag)) {
        filledIcons.add(name);
      }
    }
  }

  // match <span className="material-symbols-rounded...">name</span>
  const regexRounded = /material-symbols-rounded[^>]*>([\s\S]*?)<\/span>/g;
  while ((match = regexRounded.exec(content)) !== null) {
    const fullTag = match[0];
    const name = match[1].trim();
    if (name && !name.includes('<') && !name.includes('${') && name.length < 50) {
      icons.add(name);
      if (/font-variation-settings:\s*['"]?[^'"]*FILL[^'"]*1/i.test(fullTag)) {
        filledIcons.add(name);
      }
    }
  }

  // match icon: 'name' or icon: "name"
  const iconPropRegex = /icon:\s*['"]([a-z0-9_]+)['"]/g;
  while ((match = iconPropRegex.exec(content)) !== null) {
    icons.add(match[1]);
  }
  // match Icon name="name"
  const iconCompRegex = /<Icon\s+[^>]*name=['"]([a-z0-9_]+)['"]/g;
  while ((match = iconCompRegex.exec(content)) !== null) {
    icons.add(match[1]);
  }
}

const aliases = {
  smartphone: 'deskphone',
  phone: 'call',
  laptop: 'laptop_chromebook',
  expand_more: 'keyboard_arrow_down',
  expand_less: 'keyboard_arrow_up',
  help_outline: 'help',
  star_outline: 'star_rate',
  camera_alt: 'photo_camera',
  discount: 'sell',
  auto_awesome: 'flare',
  auto_fix_high: 'flare',
  magic_button: 'flare',
  sparkles: 'flare',
  phonelink_ring: 'ring_volume',
  favorite_border: 'favorite',
  local_offer: 'sell',
  bookmark_border: 'bookmark',
  delete_outline: 'delete',
  radio_button_checked: 'check_circle',
  radio_button_unchecked: 'circle',
  check_box_outline_blank: 'check_box',
  hourglass_disabled: 'hourglass_empty',
  pin_invoke: 'pin_drop',
  explore_off: 'explore',
  location_pin: 'location_on',
  home_pin: 'home',
  storefront: 'store',
  lock_person: 'lock',
  mark_chat_read: 'chat',
  shield_locked: 'shield_lock',
  shield_with_heart: 'shield',
  photo_size_select_actual: 'photo_library',
  tv_displays: 'tv',
  soup_kitchen: 'kitchen',
  vital_signs: 'ecg_heart',
  access_time: 'schedule',
  ad_units: 'devices',
  assessment: 'analytics',
  auto_graph: 'show_chart',
  brightness_high: 'wb_sunny',
  delivery_dining: 'two_wheeler',
  gpp_good: 'verified_user',
  gps_fixed: 'my_location',
  gps_off: 'location_off',
  gshield: 'shield',
  insights: 'trending_up',
  local_grocery_store: 'shopping_cart',
  lock_outline: 'lock',
  mobile_friendly: 'smartphone',
  monetization_on: 'attach_money',
  new_releases: 'campaign',
  offline_bolt: 'bolt',
  phone_android: 'smartphone',
  phone_iphone: 'smartphone',
  phonelink_erase: 'phone_disabled',
  phonelink_lock: 'lock',
  pixel_4_4xl_4a_5_5a_5g: 'smartphone',
  query_builder: 'schedule',
  report_problem: 'warning',
  security_update_good: 'security',
  security_update_warning: 'security',
  send_to_mobile: 'send',
  stay_current_portrait: 'smartphone',
  textsms: 'sms',
  tips_and_updates: 'lightbulb',
};

const svgDir = path.join(__dirname, '../node_modules/@material-symbols/svg-400/rounded');
const iconPaths = {};
const iconFillPaths = {};
const missing = [];

const sorted = Array.from(icons).sort();

for (const icon of sorted) {
  const targetName = aliases[icon] || icon;
  const svgFile = path.join(svgDir, `${targetName}.svg`);
  const fillSvgFile = path.join(svgDir, `${targetName}-fill.svg`);

  if (fs.existsSync(svgFile)) {
    const svgContent = fs.readFileSync(svgFile, 'utf8');
    const pathMatch = svgContent.match(/<path\s+d="([^"]+)"/);
    if (pathMatch) {
      iconPaths[icon] = pathMatch[1];
      if (!iconPaths[targetName]) {
        iconPaths[targetName] = pathMatch[1];
      }
    }
  } else {
    // Try to find if any file matches
    const testFiles = fs.readdirSync(svgDir).filter(f => f.startsWith(targetName));
    if (testFiles.length > 0) {
      const fallbackFile = path.join(svgDir, testFiles[0]);
      const svgContent = fs.readFileSync(fallbackFile, 'utf8');
      const pathMatch = svgContent.match(/<path\s+d="([^"]+)"/);
      if (pathMatch) {
        iconPaths[icon] = pathMatch[1];
      }
    } else {
      missing.push(icon);
    }
  }

  // Check fill version
  if (fs.existsSync(fillSvgFile)) {
    const svgContent = fs.readFileSync(fillSvgFile, 'utf8');
    const pathMatch = svgContent.match(/<path\s+d="([^"]+)"/);
    if (pathMatch) {
      iconFillPaths[icon] = pathMatch[1];
      if (!iconFillPaths[targetName]) {
        iconFillPaths[targetName] = pathMatch[1];
      }
    }
  }
}

if (missing.length > 0) {
  console.warn(`Missing SVGs for ${missing.length} icons:`, missing.join(', '));
  // Use a generic placeholder path for missing icons so code never crashes
  const defaultPath = iconPaths['help'] || iconPaths['circle'] || 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z';
  missing.forEach(icon => {
    iconPaths[icon] = defaultPath;
  });
}

// Shard iconPaths into two halves
const iconKeys = Object.keys(iconPaths).sort();
const halfIcon = Math.ceil(iconKeys.length / 2);
const iconPaths1 = {};
const iconPaths2 = {};
iconKeys.forEach((key, idx) => {
  if (idx < halfIcon) iconPaths1[key] = iconPaths[key];
  else iconPaths2[key] = iconPaths[key];
});

// Shard iconFillPaths into two halves
const fillKeys = Object.keys(iconFillPaths).sort();
const halfFill = Math.ceil(fillKeys.length / 2);
const iconFillPaths1 = {};
const iconFillPaths2 = {};
fillKeys.forEach((key, idx) => {
  if (idx < halfFill) iconFillPaths1[key] = iconFillPaths[key];
  else iconFillPaths2[key] = iconFillPaths[key];
});

fs.writeFileSync(
  path.join(__dirname, '../src/components/shared/icons-data-1.ts'),
  `export const ICON_PATHS_1: Record<string, string> = ${JSON.stringify(iconPaths1, null, 2)};\n`,
  'utf8'
);
fs.writeFileSync(
  path.join(__dirname, '../src/components/shared/icons-data-2.ts'),
  `export const ICON_PATHS_2: Record<string, string> = ${JSON.stringify(iconPaths2, null, 2)};\n`,
  'utf8'
);

const outTs = `// Auto-generated by scripts/extract-icons.cjs
import { ICON_PATHS_1 } from './icons-data-1';
import { ICON_PATHS_2 } from './icons-data-2';

export const ICON_PATHS: Record<string, string> = {
  ...ICON_PATHS_1,
  ...ICON_PATHS_2,
};
export { ICON_PATHS_FILL } from './icons-fill-data';

export type IconName = keyof typeof ICON_PATHS;
`;

fs.writeFileSync(
  path.join(__dirname, '../src/components/shared/icons-fill-data-1.ts'),
  `export const ICON_PATHS_FILL_1: Record<string, string> = ${JSON.stringify(iconFillPaths1, null, 2)};\n`,
  'utf8'
);
fs.writeFileSync(
  path.join(__dirname, '../src/components/shared/icons-fill-data-2.ts'),
  `export const ICON_PATHS_FILL_2: Record<string, string> = ${JSON.stringify(iconFillPaths2, null, 2)};\n`,
  'utf8'
);

const outFillTs = `// Auto-generated by scripts/extract-icons.cjs
import { ICON_PATHS_FILL_1 } from './icons-fill-data-1';
import { ICON_PATHS_FILL_2 } from './icons-fill-data-2';

export const ICON_PATHS_FILL: Record<string, string> = {
  ...ICON_PATHS_FILL_1,
  ...ICON_PATHS_FILL_2,
};
`;

fs.writeFileSync(path.join(__dirname, '../src/components/shared/icons-data.ts'), outTs, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/components/shared/icons-fill-data.ts'), outFillTs, 'utf8');
console.log(`Generated sharded icons-data.ts with ${Object.keys(iconPaths).length} icons and icons-fill-data.ts (${Object.keys(iconFillPaths).length} filled)!`);
