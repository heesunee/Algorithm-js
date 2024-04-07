const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = Number(input);

for (let i = 0; i < input; i++) {
    console.log(' '.repeat(input - (i + 1)) + '*'.repeat(i + 1));
}