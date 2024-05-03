const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [TS, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map((i) => Number(i));

for (let i = 0; i < TS; i++) {
    console.log(solution(input[i]));
}

function solution(change) {
    let count = [0, 0, 0, 0];
    const coins = [25, 10, 5, 1];
    for (let i = 0; i < coins.length; i++) {
        count[i] += Math.floor(change / coins[i]);
        change %= coins[i];
    }

    return count.join(' ');
}
