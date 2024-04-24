const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

function solution(input) {
    for (let alphabet of croatia) {
        input = input.split(alphabet).join('Q');
    }

    return input.length;
}

console.log(solution(input));
