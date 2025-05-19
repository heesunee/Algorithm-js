function solution(angle) {
  let num = 0;
  if (0 < angle && angle < 90) num = 1;
  else if (angle === 90) num = 2;
  else if (90 < angle && angle < 180) num = 3;
  else num = 4;

  return num;
}
