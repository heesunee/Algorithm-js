const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const score = input[0] / 10;
switch (true) {
    case 9 <= score:
        console.log('A');
        break;
    case 8 <= score:
        console.log('B');
        break;
    case 7 <= score:
        console.log('C');
        break;
    case 6 <= score:
        console.log('D');
        break;
    default:
        console.log('F');
}
