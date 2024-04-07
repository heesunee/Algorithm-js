const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [c, v] = input[0].split(' ').map((item) => +item);

input = input[1].split(' ').map((item) => +item);

const answer = input.filter((item) => item < v);
console.log(answer.join(' '));