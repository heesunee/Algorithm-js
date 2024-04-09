const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((item) => Number(item));


const userNum = [];
input.forEach((x) => {
    const num = x % 42;

    if (userNum.indexOf(num) === -1) userNum.push(num);
});

console.log(userNum.length);