const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]); //10, 10; 0, 30 =>9, 25; 23, 45

function solution(H, M) {
    if (M < 45) {
        if (H === 0) H = 24;
        H -= 1;
        M += 60;
    }
    M -= 45;

    return console.log(H, M);
}
