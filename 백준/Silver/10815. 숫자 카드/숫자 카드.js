const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
// 상근이의 카드 배열을 오름차순 정렬
const cards = input[1].split(' ').map(Number).sort((a, b) => a - b);
const targets = input[3].split(' ').map(Number);

// 이분 탐색(BS)
const bs = (start, end, target, arr) => {
  if (start > end) return 0;
  const mid = Math.floor((start + end) / 2);
  if (target === cards[mid]) return 1;
  else if (target > cards[mid]) {
    return bs(mid + 1, end, target, arr);
  } else {
    return bs(start, mid - 1, target, arr);
  }
};

let result = [];
// 타겟 카드 유무를 탐색하기 위해 BS실행 후 반환값을 result 배열에 추가
for (const target of targets) {
  result.push(bs(0, n - 1, target, cards));
}
console.log(result.join(' '));