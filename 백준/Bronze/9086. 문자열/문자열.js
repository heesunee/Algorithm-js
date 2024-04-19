const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [count, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < count; i++) {
    let text = input[i].split('');

    console.log(text[0] + text[text.length - 1]);
}
