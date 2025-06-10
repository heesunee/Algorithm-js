const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const graph = input.slice(1).map((line) => line.split('').map(Number));

const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y) {
  visited[x][y] = true;
  let count = 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      !visited[nx][ny] &&
      graph[nx][ny] === 1
    ) {
      count += dfs(nx, ny);
    }
  }
  return count;
}

const results = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      const size = dfs(i, j);
      results.push(size);
    }
  }
}

results.sort((a, b) => a - b);

console.log(results.length);
console.log(results.join('\n'));