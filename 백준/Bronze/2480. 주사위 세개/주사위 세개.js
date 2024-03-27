const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
    .readFileSync(filePath)
    .toString()
    .split(' ')
    .map((item) => +item);

console.log(solution(input[0], input[1], input[2]));

function solution(A, B, C) {
    if (A === B && A === C) return 10000 + A * 1000;
    else if (A === B || B === C) return 1000 + B * 100;
    else if (A === C) return 1000 + A * 100;
    if (A > B && A > C) return A * 100;
    else if (B > A && B > C) return B * 100;
    else return C * 100;
}
