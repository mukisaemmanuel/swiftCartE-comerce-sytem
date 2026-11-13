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

    // Convert CSS property to camelCase
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

// Map of SVG and HTML attributes that need camelCase in JSX
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
  'clip-path': 'clipPath',
  viewbox: 'viewBox',
  'xlink:href': 'xlinkHref',
  'xmlns:xlink': 'xmlnsXlink',
};

// SVG element tag casing map for JSX
const SVG_TAG_MAP: Record<string, string> = {
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  clippath: 'clipPath',
  textpath: 'textPath',
  foreignobject: 'foreignObject',
  fedropshadow: 'feDropShadow',
  fegaussianblur: 'feGaussianBlur',
  feoffset: 'feOffset',
  fecolormatrix: 'feColorMatrix',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
};

// Void tags in HTML
const VOID_TAGS = new Set([
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

// Numeric JSX attributes that require number type in React
const NUMERIC_ATTRS = new Set([
  'maxLength',
  'minLength',
  'colSpan',
  'rowSpan',
  'tabIndex',
  'rows',
  'cols',
  'span',
]);

// Boolean HTML attributes in JSX
const BOOLEAN_ATTRS = new Set([
  'checked',
  'disabled',
  'readonly',
  'readOnly',
  'required',
  'multiple',
  'selected',
  'autofocus',
  'autoFocus',
  'autoplay',
  'controls',
  'loop',
  'muted',
  'default',
  'open',
  'hidden',
  'novalidate',
]);

export interface ConversionContext {
  hasIcon: boolean;
  hasAssetBase: boolean;
  hasSearchQuery: boolean;
  hasDrawer: boolean;
  hasModal: boolean;
  hasToast: boolean;
  hasNavigate: boolean;
  hasAction: boolean;
}

// Convert a Cheerio DOM node to JSX string
export function domNodeToJsx(
  $: cheerio.CheerioAPI,
  node: any,
  role: string,
  screenName: string,
  size: string,
  ctx: ConversionContext
): string {
  if (node.type === 'text') {
    let text = node.data || '';
    if (!text.trim()) {
      return text;
    }
    // Escape JSX special chars in text
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\{/g, '&#123;')
      .replace(/\}/g, '&#125;');
  }

  if (node.type === 'comment') {
    return ''; // Drop HTML comments per requirements
  }

  if (node.type === 'tag') {
    let tagName = node.tagName.toLowerCase();
    if (SVG_TAG_MAP[tagName]) {
      tagName = SVG_TAG_MAP[tagName];
    }

    // Drop scripts, meta, link (handled globally)
    if (tagName === 'script' || tagName === 'meta' || tagName === 'link') {
      return '';
    }

    // Embed style tags cleanly
    if (tagName === 'style') {
      const cssText = $(node).text();
      // Remove @import for google fonts
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
        /FILL['"]?\s*:\s*1|font-variation-settings:\s*['"][^'"]*FILL[^'"]*1/i.test(
          styleAttr
        );

      let cleanClass = className
        .replace(/material-symbols-(outlined|rounded)/g, '')
        .trim();

      return `<Icon name="${iconName}" ${isFilled ? 'filled ' : ''}${
        cleanClass ? `className="${cleanClass}" ` : ''
      }/>`;
    }

    // Build attributes using Map to eliminate duplicates
    const attrMap = new Map<string, string>();
    const attribs = node.attribs || {};

    let isSearchInput = false;

    for (const [rawKey, rawVal] of Object.entries(attribs)) {
      let key = rawKey.toLowerCase();
      let val = rawVal as string;

      // Drop inline html events like onsubmit, onclick
      if (key.startsWith('on')) {
        if (key === 'onsubmit') {
          attrMap.set('onSubmit', `onSubmit={(e) => e.preventDefault()}`);
        }
        continue;
      }

      if (ATTR_MAP[rawKey]) {
        key = ATTR_MAP[rawKey];
      } else if (ATTR_MAP[key]) {
        key = ATTR_MAP[key];
      }

      // Check boolean attributes in JSX
      if (BOOLEAN_ATTRS.has(key)) {
        attrMap.set(key, `${key}={true}`);
        continue;
      }

      // Check numeric attributes in JSX
      if (NUMERIC_ATTRS.has(key) && !isNaN(Number(val)) && val.trim() !== '') {
        attrMap.set(key, `${key}={${Number(val)}}`);
        continue;
      }

      // Check image src
      if (key === 'src') {
        if (val.startsWith('http://') || val.startsWith('https://')) {
          ctx.hasAssetBase = true;
          const hash = getUrlHash(val.replace(/[;,\.\)]+$/, ''));
          attrMap.set(key, `src={\`\${assetBase}/images/${hash}.webp\`}`);
          continue;
        }
      }

      // Check inline style
      if (key === 'style') {
        const styleJsx = styleStringToJsx(val);
        attrMap.set(key, `style={${styleJsx}}`);
        continue;
      }

      // Handle search inputs
      if (
        tagName === 'input' &&
        (attribs.type === 'search' ||
          (attribs.placeholder && /search/i.test(attribs.placeholder)))
      ) {
        isSearchInput = true;
      }

      // Escape quotes in string attribute values
      const escapedVal = val.replace(/"/g, '&quot;');
      attrMap.set(key, `${key}="${escapedVal}"`);
    }

    // Wire interactivity for buttons and links
    if (tagName === 'button' || tagName === 'a') {
      const text = $(node).text().toLowerCase();
      const aria = (attribs['aria-label'] || '').toLowerCase();
      const btnTitle = (attribs['title'] || '').toLowerCase();
      const combo = `${text} ${aria} ${btnTitle}`;

      if (!attrMap.has('onClick')) {
        if (combo.includes('cart')) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/cart'); }}`
          );
        } else if (combo.includes('checkout')) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/checkout'); }}`
          );
        } else if (combo.includes('wishlist') || combo.includes('favorite')) {
          ctx.hasNavigate = true;
          ctx.hasAction = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/wishlist'); onAction?.('wishlist'); }}`
          );
        } else if (
          combo.includes('sign in') ||
          combo.includes('login') ||
          combo.includes('log in')
        ) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/sign-in'); }}`
          );
        } else if (
          combo.includes('register') ||
          combo.includes('create account') ||
          combo.includes('sign up')
        ) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/register'); }}`
          );
        } else if (combo.includes('orders') || combo.includes('my orders')) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/orders'); }}`
          );
        } else if (combo.includes('account') || combo.includes('profile')) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/account'); }}`
          );
        } else if (
          combo.includes('categories') ||
          combo.includes('category')
        ) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/categories'); }}`
          );
        } else if (combo.includes('add to cart')) {
          ctx.hasAction = true;
          ctx.hasToast = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onAction?.('add-to-cart'); alertToast('Added to cart'); }}`
          );
        } else if (combo.includes('track') || combo.includes('tracking')) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/order-tracking'); }}`
          );
        } else if (combo.includes('help') || combo.includes('support')) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/help-centre'); }}`
          );
        } else if (
          combo.includes('voucher') ||
          combo.includes('coupon') ||
          combo.includes('discount')
        ) {
          ctx.hasNavigate = true;
          attrMap.set(
            'onClick',
            `onClick={(e) => { e.preventDefault(); onNavigate?.('/vouchers'); }}`
          );
        } else if (
          combo.includes('filter') ||
          combo.includes('drawer') ||
          combo.includes('menu')
        ) {
          ctx.hasDrawer = true;
          attrMap.set('onClick', `onClick={() => setDrawerOpen((prev) => !prev)}`);
        } else if (
          combo.includes('close') ||
          combo.includes('cancel') ||
          combo.includes('dismiss')
        ) {
          ctx.hasDrawer = true;
          ctx.hasModal = true;
          attrMap.set(
            'onClick',
            `onClick={() => { setDrawerOpen(false); setModalOpen(false); }}`
          );
        } else {
          ctx.hasToast = true;
          attrMap.set('onClick', `onClick={() => alertToast('Action triggered')}`);
        }
      }
    }

    if (isSearchInput) {
      ctx.hasSearchQuery = true;
      ctx.hasNavigate = true;
      attrMap.set('value', `value={searchQuery}`);
      attrMap.set('onChange', `onChange={(e) => setSearchQuery(e.target.value)}`);
      attrMap.set(
        'onKeyDown',
        `onKeyDown={(e) => { if (e.key === 'Enter') onNavigate?.('/search?q=' + encodeURIComponent(searchQuery)); }}`
      );
    }

    const attrs = Array.from(attrMap.values());
    const attrString = attrs.length > 0 ? ' ' + attrs.join(' ') : '';

    // Handle void elements
    if (VOID_TAGS.has(tagName)) {
      return `<${tagName}${attrString} />`;
    }

    // Child nodes
    const children = (node.children || [])
      .map((child: any) => domNodeToJsx($, child, role, screenName, size, ctx))
      .join('');

    return `<${tagName}${attrString}>${children}</${tagName}>`;
  }

  return '';
}

export function convertHtmlFileToReactComponent(
  htmlPath: string,
  componentName: string,
  role: string,
  screenName: string,
  size: string,
  isNestedScreen = false
): string {
  const content = fs.readFileSync(htmlPath, 'utf8');
  const $ = cheerio.load(content);

  // Extract body or main container
  const body = $('body');
  const bodyClass = body.attr('class') || '';
  const bodyStyle = body.attr('style') || '';

  // Extract custom head styles
  let headStyles = '';
  $('head style').each((_, el) => {
    const text = $(el).text();
    if (
      !text.includes('Plus Jakarta Sans') &&
      !text.includes('Material Symbols')
    ) {
      headStyles += text + '\n';
    }
  });

  const ctx: ConversionContext = {
    hasIcon: false,
    hasAssetBase: false,
    hasSearchQuery: false,
    hasDrawer: false,
    hasModal: false,
    hasToast: false,
    hasNavigate: false,
    hasAction: false,
  };

  // Convert children of body
  let bodyJsx = '';
  body.children().each((_, child) => {
    bodyJsx += domNodeToJsx($, child, role, screenName, size, ctx);
  });

  const bodyStyleJsx = bodyStyle
    ? ` style={${styleStringToJsx(bodyStyle)}}`
    : '';

  const iconImportPath = isNestedScreen
    ? '../../../../components/shared/Icon'
    : '../../../components/shared/Icon';

  const needsSearchQuery = bodyJsx.includes('searchQuery');
  const needsDrawer = bodyJsx.includes('drawerOpen') || bodyJsx.includes('setDrawerOpen');
  const needsModal = bodyJsx.includes('modalOpen') || bodyJsx.includes('setModalOpen');
  const needsToast = bodyJsx.includes('alertToast');
  const needsAssetBase = bodyJsx.includes('assetBase');
  const needsNavigate = bodyJsx.includes('onNavigate');
  const needsAction = bodyJsx.includes('onAction');
  const needsIcon = ctx.hasIcon || bodyJsx.includes('<Icon ');

  const useStateHooks: string[] = [];
  if (needsSearchQuery) {
    useStateHooks.push(`  const [searchQuery, setSearchQuery] = useState('');`);
  }
  if (needsDrawer) {
    useStateHooks.push(`  const [, setDrawerOpen] = useState(false);`);
  }
  if (needsModal) {
    useStateHooks.push(`  const [, setModalOpen] = useState(false);`);
  }
  if (needsToast) {
    useStateHooks.push(
      `  const [toastMessage, setToastMessage] = useState<string | null>(null);\n  const alertToast = (msg: string) => { setToastMessage(msg); setTimeout(() => setToastMessage(null), 3000); };`
    );
  }

  const importUseState = useStateHooks.length > 0 ? ', { useState }' : '';
  const importIcon = needsIcon ? `import Icon from '${iconImportPath}';\n` : '';
  const assetBaseDecl = needsAssetBase
    ? `  const assetBase = import.meta.env.VITE_ASSET_BASE ?? '';\n`
    : '';
  const navDecl = needsNavigate ? `  const onNavigate = props.onNavigate;\n` : '';
  const actDecl = needsAction ? `  const onAction = props.onAction;\n` : '';
  const propsArg = needsNavigate || needsAction ? 'props' : '_props';

  return `// Auto-generated from ${htmlPath.replace(/\\/g, '/')}
import React${importUseState} from 'react';
${importIcon}
export interface ${componentName}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${componentName}: React.FC<${componentName}Props> = (${propsArg}) => {
${navDecl}${actDecl}${assetBaseDecl}${useStateHooks.join('\n')}
  return (
    <div className="${bodyClass} relative w-full overflow-x-hidden"${bodyStyleJsx}>
      ${
        headStyles
          ? `<style dangerouslySetInnerHTML={{ __html: \`${headStyles
              .replace(/`/g, '\\`')
              .replace(/\\/g, '\\\\')}\` }} />`
          : ''
      }
      ${
        needsToast
          ? `{toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-surface-dark text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
          {toastMessage}
        </div>
      )}`
          : ''
      }
      ${bodyJsx}
    </div>
  );
};

export default ${componentName};
`;
}

// Canonical screen definitions for buyer
export const BUYER_SCREEN_MAPPINGS = [
  {
    name: 'Home',
    mobile: 'home_swiftcart_marketplace_2',
    desktop: 'home_marketplace_swiftcart_desktop_1',
  },
  {
    name: 'HomeAlt',
    mobile: 'home_swiftcart_marketplace_3',
    desktop: 'home_marketplace_swiftcart_desktop_2',
  },
  {
    name: 'Cart',
    mobile: 'cart_multi_vendor_grouped',
    tablet: 'cart_multi_vendor_tablet',
    desktop: 'cart_multi_vendor_desktop',
  },
  {
    name: 'Wishlist',
    tablet: 'wishlist_swiftcart_buyer_tablet',
  },
  {
    name: 'Search',
    mobile: 'search_experience_swiftcart_uganda',
    tablet: 'search_results_filter_drawer_swiftcart_tablet',
    desktop: 'search_results_swiftcart_desktop_1',
  },
  {
    name: 'SearchAlt',
    tablet: 'search_categories_swiftcart_tablet',
    desktop: 'search_results_swiftcart_desktop_2',
  },
  {
    name: 'ProductDetail',
    mobile: 'product_detail_soundcore_space_one_2',
    tablet: 'product_detail_soundcore_space_one_tablet',
    desktop: 'product_detail_soundcore_space_one_desktop_1',
  },
  {
    name: 'ProductDetailAlt',
    desktop: 'product_detail_soundcore_space_one_desktop_2',
  },
  {
    name: 'Categories',
    mobile: 'categories_swiftcart_uganda',
    tablet: 'search_categories_swiftcart_tablet',
    desktop: 'categories_mega_directory_swiftcart_desktop_1',
  },
  {
    name: 'CategoriesAlt',
    desktop: 'categories_mega_directory_swiftcart_desktop_2',
  },
  {
    name: 'Store',
    desktop: 'store_page_soundcore_uganda_official_desktop_1',
  },
  {
    name: 'FollowedStores',
    mobile: 'followed_stores_swiftcart_uganda_1',
    tablet: 'followed_stores_swiftcart_buyer_tablet',
  },
  {
    name: 'FollowedStoresAlt',
    mobile: 'followed_stores_swiftcart_uganda_2',
  },
  {
    name: 'Checkout',
    mobile: 'checkout_step_by_step_flow',
    tablet: 'checkout_step_flow_tablet',
    desktop: 'checkout_step_flow_desktop',
  },
  {
    name: 'CheckoutDeliveryCode',
    mobile: 'checkout_delivery_code_swiftcart',
  },
  {
    name: 'PaymentWaiting',
    mobile: 'checkout_one_flow_payment_waiting',
    tablet: 'mtn_momo_ussd_pin_prompt_tablet',
    desktop: 'mtn_momo_ussd_pin_prompt_desktop',
  },
  {
    name: 'DeliveryAddresses',
    mobile: 'delivery_addresses_swiftcart_uganda',
    tablet: 'delivery_addresses_vouchers_tablet',
  },
  {
    name: 'PaymentMethods',
    mobile: 'payment_methods_swiftcart_uganda_1',
    tablet: 'mtn_momo_ussd_pin_prompt_tablet',
    desktop: 'mtn_momo_ussd_pin_prompt_desktop',
  },
  {
    name: 'PaymentMethodsAlt',
    mobile: 'payment_methods_swiftcart_uganda_2',
  },
  {
    name: 'OrderConfirmation',
    mobile: 'order_confirmation_delivery_code',
    tablet: 'order_confirmation_delivery_code_tablet',
    desktop: 'order_confirmation_delivery_code_desktop',
  },
  {
    name: 'MyOrders',
    mobile: 'my_orders_swiftcart_uganda',
    tablet: 'my_orders_order_detail_tablet',
    desktop: 'my_orders_order_detail_desktop',
  },
  {
    name: 'OrderDetail',
    mobile: 'my_orders_order_detail_swiftcart',
    tablet: 'my_orders_order_detail_tablet',
    desktop: 'my_orders_order_detail_desktop',
  },
  {
    name: 'OrderTracking',
    mobile: 'order_tracking_delivery_code_swiftcart_uganda',
    tablet: 'order_tracking_milestone_timeline_tablet',
    desktop: 'live_boda_rider_tracking_desktop',
  },
  {
    name: 'LiveRiderTracking',
    mobile: 'live_rider_tracking_boda_map_swiftcart_uganda',
    tablet: 'live_boda_rider_tracking_tablet',
    desktop: 'live_boda_rider_tracking_desktop',
  },
  {
    name: 'OrderDelivered',
    mobile: 'order_delivered_completed',
    desktop: 'order_delivered_write_review_desktop',
  },
  {
    name: 'PickupStations',
    mobile: 'pickup_station_chooser_swiftcart',
    tablet: 'pickup_station_chooser_tablet',
    desktop: 'pickup_station_chooser_desktop',
  },
  {
    name: 'ReturnsDisputes',
    mobile: 'returns_disputes_swiftcart_uganda',
    tablet: 'escrow_dispute_return_request_tablet',
  },
  {
    name: 'EscrowDisputeReturn',
    mobile: 'escrow_dispute_return_request_swiftcart_uganda',
    tablet: 'escrow_dispute_return_request_tablet',
  },
  {
    name: 'DisputeEvidence',
    mobile: 'dispute_evidence_form_swiftcart_uganda',
  },
  {
    name: 'DisputePhotos',
    mobile: 'submit_dispute_photos_swiftcart',
  },
  {
    name: 'ScanQr',
    mobile: 'scan_qr_handover_swiftcart_uganda',
  },
  {
    name: 'SignIn',
    mobile: 'sign_in_swiftcart_buyer',
    tablet: 'sign_in_register_swiftcart_tablet',
    desktop: 'sign_in_swiftcart_desktop_1',
  },
  {
    name: 'SignInAlt',
    desktop: 'sign_in_swiftcart_desktop_2',
  },
  {
    name: 'Register',
    mobile: 'sign_in_register_swiftcart_uganda',
    tablet: 'register_swiftcart_buyer_tablet',
    desktop: 'register_swiftcart_desktop_2',
  },
  {
    name: 'PhoneVerification',
    mobile: 'phone_verification_buyer_auth_swiftcart',
    tablet: 'phone_verification_swiftcart_buyer_tablet',
    desktop: 'phone_verification_swiftcart_desktop_1',
  },
  {
    name: 'PhoneVerificationAlt',
    desktop: 'phone_verification_swiftcart_desktop_2',
  },
  {
    name: 'ForgotPassword',
    mobile: 'forgot_password_swiftcart_buyer',
  },
  {
    name: 'Account',
    mobile: 'account_swiftcart_uganda',
    tablet: 'buyer_account_profile_tablet',
  },
  {
    name: 'Vouchers',
    mobile: 'vouchers_discounts_swiftcart_uganda',
    tablet: 'delivery_addresses_vouchers_tablet',
  },
  {
    name: 'Notifications',
    mobile: 'notifications_swiftcart_buyer',
    tablet: 'notifications_swiftcart_buyer_tablet',
    desktop: 'notifications_swiftcart_desktop',
  },
  {
    name: 'NotificationsAlt',
    mobile: 'messages_notifications_swiftcart_uganda',
  },
  {
    name: 'HelpCentre',
    mobile: 'help_centre_support_swiftcart_uganda',
    tablet: 'help_centre_support_tablet',
    desktop: 'help_centre_faq_swiftcart_desktop',
  },
  {
    name: 'TermsPrivacy',
    mobile: 'terms_of_service_privacy_swiftcart',
    tablet: 'privacy_policy_terms_swiftcart_buyer_tablet',
    desktop: 'terms_of_service_privacy_swiftcart_desktop',
  },
  {
    name: 'PrivacyPolicy',
    mobile: 'privacy_policy_swiftcart_buyer',
    tablet: 'privacy_policy_terms_swiftcart_buyer_tablet',
    desktop: 'terms_of_service_privacy_swiftcart_desktop',
  },
  {
    name: 'BecomeSeller',
    tablet: 'become_a_seller_4_steps_swiftcart_tablet',
  },
  {
    name: 'SellerApplicationStatus',
    mobile: 'seller_application_status',
    tablet: 'seller_application_status_swiftcart_tablet',
  },
  {
    name: 'EmptyErrorSuite',
    mobile: 'empty_error_states_suite_swiftcart',
  },
  {
    name: 'SplashFirstOpen',
    mobile: 'splash_first_open_swiftcart_uganda',
  },
  {
    name: 'SplashWelcome',
    mobile: 'splash_welcome_swiftcart_uganda',
    tablet: 'splash_welcome_swiftcart_tablet',
  },
  {
    name: 'AddMobileMoney',
    mobile: 'add_mobile_money_bottom_sheet_swiftcart_uganda',
  },
  {
    name: 'MtnMomoUssd',
    mobile: 'mtn_momo_ussd_165_pin_prompt',
    tablet: 'mtn_momo_ussd_pin_prompt_tablet',
    desktop: 'mtn_momo_ussd_pin_prompt_desktop',
  },
];

export function runConversionPipeline() {
  console.log('Starting exact mockup conversion pipeline for Buyer role...');

  const baseOutDir = path.resolve('src/mockups/buyer');
  const screensOutDir = path.join(baseOutDir, 'screens');

  if (!fs.existsSync(screensOutDir)) {
    fs.mkdirSync(screensOutDir, { recursive: true });
  }

  // 1. Convert EVERY individual screen folder in design/<size>/buyer/<screen>
  const sizes = ['mobile', 'tablet', 'desktop'] as const;
  const convertedScreenFolders: { size: string; folder: string; path: string }[] = [];

  for (const size of sizes) {
    const dir = path.resolve(`design/${size}/buyer`);
    if (!fs.existsSync(dir)) continue;

    const folders = fs.readdirSync(dir);
    for (const folder of folders) {
      const codeHtmlPath = path.join(dir, folder, 'code.html');
      if (fs.existsSync(codeHtmlPath)) {
        const destDir = path.join(screensOutDir, folder);
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }
        const componentCode = convertHtmlFileToReactComponent(
          codeHtmlPath,
          'Screen',
          'buyer',
          folder,
          size,
          true
        );
        fs.writeFileSync(path.join(destDir, 'index.tsx'), componentCode, 'utf8');
        convertedScreenFolders.push({ size, folder, path: codeHtmlPath });
      }
    }
  }

  console.log(
    `Converted ${convertedScreenFolders.length} individual screen folders (mobile/tablet/desktop).`
  );

  // 2. Generate canonical responsive screen components
  const missingSizesLog: {
    screen: string;
    missing: string[];
    available: string[];
  }[] = [];

  for (const mapping of BUYER_SCREEN_MAPPINGS) {
    const screenDir = path.join(baseOutDir, mapping.name);
    if (!fs.existsSync(screenDir)) {
      fs.mkdirSync(screenDir, { recursive: true });
    }

    const available: string[] = [];
    const missing: string[] = [];

    // Mobile
    if (mapping.mobile) {
      const codePath = path.resolve(
        `design/mobile/buyer/${mapping.mobile}/code.html`
      );
      if (fs.existsSync(codePath)) {
        const code = convertHtmlFileToReactComponent(
          codePath,
          'Mobile',
          'buyer',
          mapping.name,
          'mobile'
        );
        fs.writeFileSync(path.join(screenDir, 'Mobile.tsx'), code, 'utf8');
        available.push('mobile');
      } else {
        missing.push('mobile');
      }
    } else {
      missing.push('mobile');
    }

    // Tablet
    if (mapping.tablet) {
      const codePath = path.resolve(
        `design/tablet/buyer/${mapping.tablet}/code.html`
      );
      if (fs.existsSync(codePath)) {
        const code = convertHtmlFileToReactComponent(
          codePath,
          'Tablet',
          'buyer',
          mapping.name,
          'tablet'
        );
        fs.writeFileSync(path.join(screenDir, 'Tablet.tsx'), code, 'utf8');
        available.push('tablet');
      } else {
        missing.push('tablet');
      }
    } else {
      missing.push('tablet');
    }

    // Desktop
    if (mapping.desktop) {
      const codePath = path.resolve(
        `design/desktop/buyer/${mapping.desktop}/code.html`
      );
      if (fs.existsSync(codePath)) {
        const code = convertHtmlFileToReactComponent(
          codePath,
          'Desktop',
          'buyer',
          mapping.name,
          'desktop'
        );
        fs.writeFileSync(path.join(screenDir, 'Desktop.tsx'), code, 'utf8');
        available.push('desktop');
      } else {
        missing.push('desktop');
      }
    } else {
      missing.push('desktop');
    }

    if (missing.length > 0) {
      missingSizesLog.push({
        screen: mapping.name,
        missing,
        available,
      });
    }

    // Generate responsive index.tsx with fallback to nearest available size
    const imports: string[] = [];
    if (available.includes('mobile')) {
      imports.push(`import Mobile from './Mobile';`);
    }
    if (available.includes('tablet')) {
      imports.push(`import Tablet from './Tablet';`);
    }
    if (available.includes('desktop')) {
      imports.push(`import Desktop from './Desktop';`);
    }

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

    const indexContent = `// Auto-generated responsive container for ${mapping.name}
import React from 'react';
import useBreakpoint from '../../../hooks/useBreakpoint';
${imports.join('\n')}

export interface ${mapping.name}Props {
  onNavigate?: (path: string) => void;
  onAction?: (action: string, payload?: unknown) => void;
}

export const ${mapping.name}: React.FC<${mapping.name}Props> = (props) => {
  const breakpoint = useBreakpoint();

  if (breakpoint === 'mobile') {
    return ${getRenderFor('mobile')};
  }

  if (breakpoint === 'tablet') {
    return ${getRenderFor('tablet')};
  }

  return ${getRenderFor('desktop')};
};

export default ${mapping.name};
`;

    fs.writeFileSync(path.join(screenDir, 'index.tsx'), indexContent, 'utf8');
  }

  // 3. Write docs/MISSING-SIZES.md
  let missingDoc = '# Missing Mockup Sizes (Responsive Fallback Log)\n\n';
  missingDoc +=
    'The following screens do not exist in all 3 sizes (mobile, tablet, desktop) in the design package. ';
  missingDoc +=
    'The responsive container falls back to the nearest available size (Mobile -> Tablet -> Desktop, etc.).\n\n';
  missingDoc += '| Screen | Available Sizes | Missing Sizes | Fallback Rule |\n';
  missingDoc += '| --- | --- | --- | --- |\n';

  for (const item of missingSizesLog) {
    missingDoc += `| **${item.screen}** | ${item.available.join(', ')} | ${item.missing.join(', ')} | nearest available |\n`;
  }

  fs.writeFileSync(path.resolve('docs/MISSING-SIZES.md'), missingDoc, 'utf8');
  console.log(`Saved docs/MISSING-SIZES.md with ${missingSizesLog.length} entries.`);

  // 4. Generate src/mockups/buyer/index.ts
  let exportCode = `// Auto-generated exports for Buyer mockups\n\n`;
  for (const mapping of BUYER_SCREEN_MAPPINGS) {
    exportCode += `export { ${mapping.name} } from './${mapping.name}';\n`;
  }
  fs.writeFileSync(path.join(baseOutDir, 'index.ts'), exportCode, 'utf8');
  console.log(`Saved src/mockups/buyer/index.ts.`);
}

if (
  process.argv[1]?.endsWith('convert-mockups.ts') ||
  process.argv[1]?.endsWith('convert-mockups.js')
) {
  runConversionPipeline();
}
