function solution(A) {
  // write your code in JavaScript (Node.js 14)
  let MAX = Number.MIN_SAFE_INTEGER;

  const set = new Set();

  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    set.add(value);
    MAX = Math.max(value, MAX);
  }

  if (MAX < 1) {
    return 1;
  }

  for (let i = 1; i < MAX; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  return MAX + 1;
}
