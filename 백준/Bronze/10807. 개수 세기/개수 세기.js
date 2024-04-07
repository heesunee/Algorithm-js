const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const caseNum = +input[0];
const findNum = +input[2];
let answer = 0;
input = input[1].split(' ').map((item) => +item);

for (let i = 0; i < caseNum; i++) {
    if (input[i] === findNum) answer++;
}
console.log(answer);