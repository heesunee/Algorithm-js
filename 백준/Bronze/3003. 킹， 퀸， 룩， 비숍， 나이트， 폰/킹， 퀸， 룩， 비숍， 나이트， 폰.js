const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(' ')
    .map((item) => Number(item));

const pieces = [1, 1, 2, 2, 2, 8];
let answer = [];

for (let i in input) {
    answer.push(pieces[i] - input[i]);
}

console.log(answer.join(' '));
