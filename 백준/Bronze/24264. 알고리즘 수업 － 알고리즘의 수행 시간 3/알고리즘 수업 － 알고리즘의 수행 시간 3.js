const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
console.log(Math.pow(input,2));
//Math.pow(3,2)는 3^2와 같다.
//Math.pow 대신 **을 제곱으로 표현하여 계산해도 무방하다.
console.log(2);
