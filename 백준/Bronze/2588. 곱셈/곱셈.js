const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let inputA = +input[0];
let inputB = input[1].split('').map((item) => +item);
inputB.unshift(+input[1]);
solution(inputA, inputB);

function solution(A, B) {
    for (let i = B.length - 1; i >= 0; i--) {
        console.log(A * B[i]);
    }
}