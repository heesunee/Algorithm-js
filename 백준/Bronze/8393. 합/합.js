const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = Number(input);
let sum = 0;

for (let i = 1; i <= input; i++) {
    sum = sum + i;
}
console.log(sum);