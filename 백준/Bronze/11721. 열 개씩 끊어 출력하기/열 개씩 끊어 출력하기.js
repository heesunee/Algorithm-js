const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .split('');

while (input.length > 0) {
  console.log(input.splice(0, 10).join(''));
}
