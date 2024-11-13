const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

solution(input[0], input[1], input[2], input[3], input[4], input[5]);

function solution(a, b, c, d, e, f) {
  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      if (a * i + b * j === c && d * i + e * j === f) {
        console.log(i, j);
        return;
      }
    }
  }
}