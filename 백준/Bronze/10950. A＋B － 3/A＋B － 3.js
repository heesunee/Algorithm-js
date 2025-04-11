const [T, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const array = input.map((cur) => cur.trim().split(' ').map(Number));

for (let i = 0; i < T; i++) {
  console.log(array[i][0] + array[i][1]);
}
