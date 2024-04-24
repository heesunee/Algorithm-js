const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().toLowerCase().split('');

input = input.map((item) => item.charCodeAt());

function findNumber(input) {
    const numberCount = {};

    input.forEach((num) => {
        if (numberCount[num]) numberCount[num]++;
        else numberCount[num] = 1;
    });

    let maxCount = 0;
    let maxChars = [];
    for (let num in numberCount) {
        if (numberCount[num] > maxCount) {
            maxCount = numberCount[num];
            maxChars = [num];
        } else if (numberCount[num] === maxCount) maxChars.push(maxChars);
    }

    if (maxChars.length > 1) return '?';
    else return String.fromCharCode(maxChars[0]).toUpperCase();
}

console.log(findNumber(input));
