const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = Number(input[0]);
let array = '';

for (let i = 0; i < input; i++) {
    array = '';
    for (let j = 0; j <= i; j++) {
        array += '*';
    }
    console.log(array);
}