const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const c = +input[0];
input = input[1].split(' ').map((item) => +item);

console.log(Math.min(...input), Math.max(...input));