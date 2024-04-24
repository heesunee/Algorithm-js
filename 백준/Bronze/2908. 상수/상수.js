const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
let array = [];

for (let i = 0; i < input.length; i++) {
    const number = input[i].split('');
    array.push(Number(number.reverse().join('')));
}

array[0] > array[1] ? console.log(array[0]) : console.log(array[1]);
