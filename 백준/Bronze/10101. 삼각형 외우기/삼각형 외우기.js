const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

solution(input);

function solution(input) {
  let sum = input.reduce((total, angle) => (total += angle));

  if (input[0] === 60 && input[1] === 60 && input[2] === 60) {
    console.log('Equilateral');
  } else if (sum !== 180) {
    console.log('Error');
  } else if (input[0] === input[2] || input[1] === input[2]) {
    console.log('Isosceles');
  } else {
    console.log('Scalene');
  }
}