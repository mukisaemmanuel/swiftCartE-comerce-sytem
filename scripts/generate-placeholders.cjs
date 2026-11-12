const fs = require('fs');
const path = require('path');

const targetDir = path.resolve('public/placeholders');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function makeSvg(title, bg1, bg2, iconText) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}" />
      <stop offset="100%" stop-color="${bg2}" />
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#grad)" rx="24" />
  <circle cx="300" cy="270" r="100" fill="#ffffff" fill-opacity="0.15" />
  <text x="300" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-size="72" font-weight="bold" fill="#ffffff" text-anchor="middle">${iconText}</text>
  <text x="300" y="440" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="700" fill="#ffffff" text-anchor="middle">${title}</text>
  <text x="300" y="480" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#ffffff" fill-opacity="0.8" text-anchor="middle">SwiftCart Uganda Verified</text>
</svg>`;
}

function makeBannerSvg(title, subtitle, bg1, bg2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="480" viewBox="0 0 1200 480">
  <defs>
    <linearGradient id="bgrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg1}" />
      <stop offset="100%" stop-color="${bg2}" />
    </linearGradient>
  </defs>
  <rect width="1200" height="480" fill="url(#bgrad)" rx="24" />
  <circle cx="1050" cy="240" r="180" fill="#ffffff" fill-opacity="0.12" />
  <circle cx="950" cy="120" r="80" fill="#ffffff" fill-opacity="0.08" />
  <text x="80" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="#ffffff" fill-opacity="0.9" letter-spacing="2">KAMPALA SUPER DEALS</text>
  <text x="80" y="260" font-family="'Plus Jakarta Sans', sans-serif" font-size="52" font-weight="800" fill="#ffffff">${title}</text>
  <text x="80" y="320" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="500" fill="#ffffff" fill-opacity="0.9">${subtitle}</text>
  <rect x="80" y="360" width="220" height="54" rx="14" fill="#ffffff" />
  <text x="190" y="394" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="${bg2}" text-anchor="middle">Shop Deals Now</text>
</svg>`;
}

const placeholders = [
  { file: 'phones.svg', title: 'Smartphones & 5G', bg1: '#FF8A1F', bg2: '#DA3700', icon: '📱' },
  { file: 'electronics.svg', title: 'Audio & Gadgets', bg1: '#3B82F6', bg2: '#1D4ED8', icon: '🎧' },
  { file: 'fashion.svg', title: 'Urban Fashion', bg1: '#8B5CF6', bg2: '#6D28D9', icon: '👕' },
  { file: 'appliances.svg', title: 'Home & Kitchen', bg1: '#10B981', bg2: '#047857', icon: '🍳' },
  { file: 'beauty.svg', title: 'Health & Beauty', bg1: '#EC4899', bg2: '#BE185D', icon: '✨' },
  { file: 'groceries.svg', title: 'Fresh Supermarket', bg1: '#F59E0B', bg2: '#D97706', icon: '🛒' },
  { file: 'headphones.svg', title: 'Space One Wireless', bg1: '#0E1B4D', bg2: '#1E293B', icon: '🎵' },
  { file: 'smartwatch.svg', title: 'Ultra Smartwatch', bg1: '#0284C7', bg2: '#0369A1', icon: '⌚' },
  { file: 'laptop.svg', title: 'SwiftBook Pro M3', bg1: '#475569', bg2: '#1E293B', icon: '💻' },
  { file: 'shoes.svg', title: 'Running Sneakers', bg1: '#EA580C', bg2: '#9A3412', icon: '👟' },
  { file: 'avatar.svg', title: 'Swift Merchant', bg1: '#FF8A1F', bg2: '#0E1B4D', icon: '🏪' },
];

placeholders.forEach((p) => {
  fs.writeFileSync(path.join(targetDir, p.file), makeSvg(p.title, p.bg1, p.bg2, p.icon));
});

const banners = [
  {
    file: 'banner-1.svg',
    title: 'Up to 40% Off Tech',
    subtitle: 'Fast 2-hour Boda Delivery Across Kampala',
    bg1: '#FF8A1F',
    bg2: '#DA3700',
  },
  {
    file: 'banner-2.svg',
    title: 'Nakasero Flagship Sale',
    subtitle: 'Verified Ugandan Merchants â€¢ Payment Held in Safe Escrow',
    bg1: '#0E1B4D',
    bg2: '#1E293B',
  },
  {
    file: 'banner-3.svg',
    title: 'Nationwide Hub Pickups',
    subtitle: 'Collect at Posta Uganda & Jinja/Entebbe Stations',
    bg1: '#047857',
    bg2: '#065F46',
  },
  {
    file: 'store-banner.svg',
    title: 'Soundcore Uganda Flagship',
    subtitle: 'Official Audio Store â€¢ URSB Registered Nakasero Merchant',
    bg1: '#0E1B4D',
    bg2: '#3B82F6',
  },
];

banners.forEach((b) => {
  fs.writeFileSync(path.join(targetDir, b.file), makeBannerSvg(b.title, b.subtitle, b.bg1, b.bg2));
});

console.log('Generated placeholder SVGs in public/placeholders/');
