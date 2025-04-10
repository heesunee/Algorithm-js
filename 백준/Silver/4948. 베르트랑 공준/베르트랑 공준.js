const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function isPrime(n) {
  const array = new Array(2 * n + 1).fill(true);
  array[0] = array[1] = false;

  for (let i = 2; i * i <= 2 * n; i++) {
    if (array[i]) {
      for (let j = i * i; j <= 2 * n; j += i) {
        array[j] = false;
      }
    }
  }
  let result = 0;
  for (let i = n + 1; i <= 2 * n; i++) {
    if (array[i]) result++;
  }

  return result;
}

for (let i = 0; i < input.length - 1; i++) {
  console.log(isPrime(input[i]));
}
