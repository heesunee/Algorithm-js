const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

let num = Number(input);

function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

console.log(solution(num));
