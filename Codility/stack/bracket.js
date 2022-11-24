function solution(S) {
  const pair = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (const value of S) {
    if (value === "(" || value === "[" || value === "{") {
      stack.push(value);
    } else {
      if (stack.length === 0) {
        return 0;
      }

      const last = stack.pop();

      if (pair[last] !== value) {
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}
