const string = "(()()()()((())))";

s(string);
console.log(s(string));
function s(str) {
  const answer = "YES";
  const stack = [];
  for (let s of str) {
    if (s === "(") {
      stack.push(s);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  if (stack.length) return "NO";

  return answer;
}
