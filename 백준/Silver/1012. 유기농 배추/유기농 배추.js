const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);

// DFS 함수
function dfs(x, y, array, M, N) {
    if (x < 0 || y < 0 || x >= M || y >= N) return false; // 좌표 유효성 검사
    if (array[x][y] === 1) { // 배추가 심어져 있으면
        array[x][y] = 0; // 방문 표시 (0으로 변경)

        // 상하좌우로 재귀 호출하여 연결된 배추 탐색
        dfs(x - 1, y, array, M, N);
        dfs(x + 1, y, array, M, N);
        dfs(x, y - 1, array, M, N);
        dfs(x, y + 1, array, M, N);
        return true;
    }
    return false; // 배추가 심어져 있지 않은 경우
}

// 메인 함수
function solve(input) {
    let index = 1;
    const results = [];

    for (let t = 0; t < T; t++) { // T번 반복
        const [M, N, K] = input[index++].split(" ").map(Number);
        const array = Array.from({ length: M }, () => Array(N).fill(0));

        for (let j = 0; j < K; j++) {
            const [x, y] = input[index++].split(" ").map(Number);
            array[x][y] = 1;
        }

        // 그래프를 순회하며 탐색
        let total = 0;
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (dfs(i, j, array, M, N)) { // 배추가 심어져 있으면 dfs 수행
                    total += 1;
                }
            }
        }
        results.push(total);
    }

    results.forEach(result => console.log(result));
}

// 입력 예제 처리
solve(input);