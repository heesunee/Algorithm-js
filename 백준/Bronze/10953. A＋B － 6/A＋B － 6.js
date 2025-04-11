const [T, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < T; i++) {
  const [A, B] = input[i].split(',').map(Number);
  console.log(A + B);
}
