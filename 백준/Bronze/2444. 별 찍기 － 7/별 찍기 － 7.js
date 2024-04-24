const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = fs.readFileSync(filePath).toString().trim();

for (let i = 1; i <= N; i++) {
    console.log(' '.repeat(N - i) + '*'.repeat(2 * i - 1));
}

for (let i = 1; i < N; i++) {
    console.log(' '.repeat(i) + '*'.repeat(2 * (N - i) - 1));
}
