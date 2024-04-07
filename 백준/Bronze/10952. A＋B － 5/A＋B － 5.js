const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
for (let i = 0; i < input.length; i++) {
    answer = input[i]
        .toString()
        .split(' ')
        .map((item) => +item);
    if (answer[0] > 0 && answer[1] > 0) {
        console.log(answer[0] + answer[1]);
    }
}