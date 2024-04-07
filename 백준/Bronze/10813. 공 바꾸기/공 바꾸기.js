const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, m], ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((item) => item.split(' ').map(Number)); // 구조 분해 할당
let arr = Array(n).fill(0);

for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
}

for ([a, b] of input) {
    let temp = arr[b - 1];
    arr[b - 1] = arr[a - 1];
    arr[a - 1] = temp;
}

console.log(arr.join(' '));