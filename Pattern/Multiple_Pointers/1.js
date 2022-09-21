function sumZero(arr) {
  let answer = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    debugger;
    if (sum === 0) {
      answer++;
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return answer;
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3]));
