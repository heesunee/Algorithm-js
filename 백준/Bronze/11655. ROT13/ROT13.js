const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString();
const ROT13 = {};
for (let i = 0; i < 26; i++) {
  const lower = String.fromCharCode(97 + i);
  const upper = String.fromCharCode(65 + i);
  ROT13[lower] = String.fromCharCode(97 + ((i + 13) % 26));
  ROT13[upper] = String.fromCharCode(65 + ((i + 13) % 26));
}

const out = input
  .split('')
  .map((ch) => ROT13[ch] ?? ch)
  .join('');

process.stdout.write(out);
