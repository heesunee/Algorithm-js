const fs = require('fs');
const input = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

let idx = 0;
const [N, M] = input[idx++].trim().split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < N - 1; i++) {
  const [x, y, cost] = input[idx++].trim().split(' ').map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(cur, dist, visited, distance) {
  visited[cur] = true;
  distance[cur] = dist;

  for (const [next, w] of graph[cur]) {
    if (!visited[next]) {
      dfs(next, dist + w, visited, distance);
    }
  }
}

for (let i = N; i < input.length; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  const visited = Array(N + 1).fill(false);
  const distance = Array(N + 1).fill(-1);

  dfs(x, 0, visited, distance);
  console.log(distance[y]);
}
