const a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

s(a);
function s(str) {
  const stack = [];

  for (let s of str) {
    if (s === ")") {
      while (true) {
        if (stack.pop() === "(") {
          break;
        }
      }
    } else {
      stack.push(s);
    }
  }

  console.log(stack.join(""));
}
