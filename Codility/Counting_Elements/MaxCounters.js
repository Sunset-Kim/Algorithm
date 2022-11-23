function solution(N, A) {
  let counter = Array(N).fill(0);
  let MAX = 0;
  let calledMax = 0;

  for (let i = 0; i < A.length; i++) {
    const value = A[i];

    if (counter[value - 1] !== undefined) {
      if (counter[value - 1] < calledMax) {
        counter[value - 1] = calledMax;
      }
      MAX = Math.max(++counter[value - 1], MAX);
    } else {
      calledMax = MAX;
    }
  }

  for (let i = 0; i < N; i++) {
    if (counter[i] < calledMax) {
      counter[i] = calledMax;
    }
  }

  return counter;
}
