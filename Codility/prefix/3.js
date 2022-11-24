function solution(A) {
  // write your code in JavaScript (Node.js 14)
  let result = 0;
  let east = 0;

  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value === 0) {
      east++;
    } else {
      result += east;
      if (result > 1_000_000_000) {
        return -1;
      }
    }
  }

  return result;
}
