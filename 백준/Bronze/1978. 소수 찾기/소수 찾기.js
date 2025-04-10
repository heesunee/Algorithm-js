const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const number = input[1].split(' ').map(Number);

let sum = 0;

for (let i = 0; i < N; i++) {
  if (number[i] < 2) continue;

  let isPrime = true;

  for (let j = 2; j * j <= number[i]; j++) {
    if (number[i] % j === 0) {
      isPrime = false;
    }
  }

  if (isPrime) ++sum;
}

console.log(sum);

