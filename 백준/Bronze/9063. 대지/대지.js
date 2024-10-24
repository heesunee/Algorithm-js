const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = +input.shift();
let arr = [];

input.forEach((dots) => {
  arr.push(dots.split(' ').map((item) => +item));
});

solution(num, arr);

function solution(num, arr) {
  if (num === 1) {
    console.log(0);
    return;
  }
  let answer = 0;
  let xPoints = [];
  let yPoints = [];

  for (let i = 0; i < num; i++) {
    xPoints[i] = arr[i][0];
    yPoints[i] = arr[i][1];
  }

  xPoints.sort((a, b) => b - a);
  yPoints.sort((a, b) => b - a);

  answer =
    Math.abs(xPoints[0] - xPoints[num - 1]) *
    Math.abs(yPoints[0] - yPoints[num - 1]);

  console.log(answer);
}