const { log } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = Number(input[0]) / 4;
let array = ['int'];
for (let i = 0; i < num; i++) {
    array.unshift('long');
}

array = array.reduce((prev, cur) => {
    return prev + ' ' + cur;
});

console.log(array);