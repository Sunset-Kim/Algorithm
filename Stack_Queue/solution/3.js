// 후위연산
// 352+*9- => 12
const a = "352+*9-";

s(a);

function s(str) {
  const stack = [];

  for (let s of str) {
    if (s === "+") {
      const num1 = Number(stack.pop());
      const num2 = Number(stack.pop());
      stack.push(num1 + num2);
    } else if (s === "-") {
      const num1 = Number(stack.pop());
      const num2 = Number(stack.pop());
      stack.push(num1 - num2);
    } else if (s === "*") {
      const num1 = Number(stack.pop());
      const num2 = Number(stack.pop());
      stack.push(num1 * num2);
    } else {
      stack.push(s);
    }

    console.log(stack);
  }

  console.log(stack);
}
