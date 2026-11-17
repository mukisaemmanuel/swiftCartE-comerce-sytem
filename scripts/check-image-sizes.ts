import * as fs from 'fs';

const hashes = [
  'a593324aedcf6cb2',
  'f1bbfd17fdb92d75',
  '6666a05c76c4c201',
  '72ed6cc157770beb',
  '5b99427efcba69e4',
  '37ca7db9721adf1a',
  'ad6f7f7fb7a5ee6f',
  'f77d9c2410d1b883',
  '6ef56f7b9b3ddf40',
  '18a63b8793377535',
  'e65f6d7fb679f160',
  '95ec767b02525811',
  '9e6e1814fdfbfa57',
  'abfa3c4dbb6c6e0a',
  'ecfbfc472ab6b281',
  'aeb9118a4ba966b9',
  '8077dcff605ab76e',
  '35aa19b36e6443c5',
  '2110b1926df8ecac',
  '0904559101697798',
  'ce3704038c05f2da'
];

for (const h of hashes) {
  const p = `public/images/${h}.webp`;
  if (fs.existsSync(p)) {
    console.log(`${h}: ${fs.statSync(p).size} bytes`);
  } else {
    console.log(`${h}: MISSING`);
  }
}
