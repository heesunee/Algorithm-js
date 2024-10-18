const fs = require('fs');
let X = 0, Y = 0;
fs.readFileSync('/dev/stdin').toString().split('\n').forEach((line) => {
    const [x, y] = line.split(' ').map(Number);
    X ^= x;
    Y ^= y;
})
console.log(X, Y);