function solution(H) {
  // write your code in JavaScript (Node.js 14)
  let count = 0;
  const stack = [];

  for (const h of H) {
    if (stack.length === 0) {
      stack.push(h);
    } else {
      while (stack.length !== 0) {
        const last = stack[stack.length - 1];
        if (last < h) {
          stack.push(h);
          break;
        } else if (last > h) {
          stack.pop();
          count++;
        } else {
          break;
        }
      }

      if (stack.length === 0) {
        stack.push(h);
      }
    }
  }

  return count + stack.length;
}
