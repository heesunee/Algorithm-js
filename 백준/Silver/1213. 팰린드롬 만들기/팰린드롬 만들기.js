const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('');

const arr = Array(26).fill(0);
for (const ch of input) {
  arr[ch.charCodeAt(0) - 65]++;
}

let oddIdx = -1, oddCnt = 0;
for (let i = 0; i < 26; i++) {
  if (arr[i] % 2 === 1) { oddCnt++; oddIdx = i; }
}
if (oddCnt > 1) {
  console.log("I'm Sorry Hansoo");
  process.exit(0);
}

let left = '';
for (let i = 0; i < 26; i++) {
  left += String.fromCharCode(65 + i).repeat(Math.floor(arr[i] / 2)); // ← 여기!
}

const mid = oddIdx !== -1 ? String.fromCharCode(65 + oddIdx) : '';
const right = left.split('').reverse().join('');

console.log(left + mid + right);
