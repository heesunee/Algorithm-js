const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split('\n');

const N = Number(input[0]);
const numbers = input[1].split('').map(Number);

result = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(result);
