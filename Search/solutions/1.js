/**
 * 자신의 바로 앞수 보다 큰 수만 출력하는 프로그램
 */

solution(6, [7, 3, 9, 5, 6, 12]); // 7 9 6 12

console.log(solution(6, [7, 3, 9, 5, 6, 12]));

function solution(k, arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const prev = arr[i - 1] || -Infinity;

    if (prev < arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}
