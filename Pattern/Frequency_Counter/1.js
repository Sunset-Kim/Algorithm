function same(arr1, arr2) {
  const frequencyObj1 = {};
  const frequencyObj2 = {};

  arr1.forEach((num) => {
    frequencyObj1[num] = frequencyObj1[num] + 1 || 1;
  });

  arr2.forEach((num) => {
    frequencyObj2[num] = frequencyObj2[num] + 1 || 1;
  });

  for (let key in frequencyObj1) {
    if (!(key ** 2 in frequencyObj2)) {
      return false;
    }

    if (frequencyObj2[key ** 2] !== frequencyObj1[key]) {
      return false;
    }
  }

  return true;
}

// test
console.log(same([1, 2, 2, 3], [1, 4, 9, 4])); // true
console.log(same([1, 2, 3, 2], [1, 4, 9, 9])); // fase
console.log(same([1, 2, 3, 4], [1, 4, 9, 17])); // false
