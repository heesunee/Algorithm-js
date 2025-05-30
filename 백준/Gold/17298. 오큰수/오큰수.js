// 10번 문제: 오큰수(NGE.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const stack = [];

// 오큰수 찾기 알고리즘
for (let i = 0; i < N; i++) {
  while (stack.length && Number(A[i]) > Number(A[stack[stack.length - 1]])) {
    A[stack.pop()] = A[i];
  }
  stack.push(i);
}

// 스택에 남아있는 원소 처리
while (stack.length) {
  A[stack.pop()] = -1;
}

console.log(A.join(" ").trim());