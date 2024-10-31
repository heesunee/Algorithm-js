const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, pattern, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution() {
  const findPattern = pattern.trim();
  const starIndex = findPattern.indexOf('*'); // 별표의 인덱스 찾기

  // 별표를 기준으로 앞부분과 뒷부분 분리
  const startPattern = findPattern.slice(0, starIndex);
  const endPattern = findPattern.slice(starIndex + 1);

  input.forEach((word) => {
    // 각 파일 이름에 대해 시작 패턴과 끝 패턴을 확인
    const startsWithPattern = word.startsWith(startPattern);
    const endsWithPattern = word.endsWith(endPattern);
    
    // 파일 이름의 길이를 확인하여 두 패턴이 맞는지 판단
    if (startsWithPattern && endsWithPattern && 
        word.length >= (startPattern.length + endPattern.length)) {
      console.log('DA');
    } else {
      console.log('NE');
    }
  });
}

solution();

