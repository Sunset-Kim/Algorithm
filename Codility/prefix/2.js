function solution(A, B, K) {
  // write your code in JavaScript (Node.js 14)
  let count = 0;
  let num = A;
  while (num <= B) {
    if (num % K === 0) {
      count++;
      num += K;
    } else {
      num++;
    }
  }

  return count;
}
