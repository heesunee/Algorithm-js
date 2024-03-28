const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const total = Number(input[0]);
const count = Number(input[1]);
let sum = 0;
for (let i = 0; i < count; i++) {
    let price = input[i + 2].split(' ').map((item) => +item);
    sum += price[0] * price[1];
}

if (sum === total) return console.log('Yes');
else return console.log('No');