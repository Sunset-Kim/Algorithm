function fibonacci(nth, memo = []) {
  if (memo[nth] !== undefined) return memo[nth];

  if (nth <= 2) return 1;

  const result = fibonacci(nth - 1, memo) + fibonacci(nth - 2, memo);
  memo[nth] = result;
  return result;
}
