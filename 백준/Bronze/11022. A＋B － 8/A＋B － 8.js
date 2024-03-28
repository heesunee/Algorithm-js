const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let t = +input[0];

for (let i = 1; i <= t; i++) {
    let num = input[i].split(' ').map((item) => +item);
    console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${num[0] + num[1]}`);
}
