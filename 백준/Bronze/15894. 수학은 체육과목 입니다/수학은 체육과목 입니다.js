const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = fs.readFileSync(filePath).toString().trim();
solution(n);

function solution(n) {
    // 둘레의 길이는 입력한 n*4
 console.log(n*4);
}