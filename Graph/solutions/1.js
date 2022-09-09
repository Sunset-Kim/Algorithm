/**
 * 경로 탐색
 */

const arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(s(arr));

function s(arr) {
  const adjencylist = {};
  let count = 0;
  const ch = Array.from({ length: 6 }, () => 0);

  arr.forEach(([i, j]) => {
    if (!adjencylist[i]) {
      adjencylist[i] = [j];
    } else {
      adjencylist[i].push(j);
    }

    if (!adjencylist[j]) {
      adjencylist[j] = [];
    }
  });

  console.log(adjencylist);

  ch[1] = 1;
  dfs(1);

  console.log(count);

  function dfs(vertex) {
    if (vertex === 5) {
      count++;
    } else {
      adjencylist[vertex].forEach((item) => {
        if (ch[item] === 0) {
          ch[item] = 1;
          dfs(item);
          ch[item] = 0;
        }
      });
    }
  }
}
