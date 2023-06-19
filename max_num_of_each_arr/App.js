function largestOfFour(arr) {
  let maxNum,
    newArr = [];
  for (let i = 0; i < arr.length; i++) {
    maxNum = Number.NEGATIVE_INFINITY;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxNum) maxNum = arr[i][j];
    }
    newArr.push(maxNum);
  }
  return newArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]); // return [5, 27, 39, 1001]
