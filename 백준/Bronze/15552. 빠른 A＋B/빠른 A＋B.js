const { log } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = Number(input[0]);
let result = '';
for (let i = 1; i <= num; i++) {
    let value = input[i].split(' ').map((item) => +item);
    result += value[0] + value[1] + '\n';
}
console.log(result);