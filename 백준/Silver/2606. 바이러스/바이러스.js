const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const M = Number(input[1]);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 2; i < input.length; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let cnt = 0;
let visited = new Array(N + 1).fill(false);

const dfs = (x) => {
  visited[x] = true;
  cnt++;
  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
};

dfs(1);
console.log(cnt - 1);
