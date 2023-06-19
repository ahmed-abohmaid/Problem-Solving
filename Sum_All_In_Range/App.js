function sumAll(arr) {
  let sum = 0;
  let start = arr[0] < arr[1] ? arr[0] : arr[1];
  let end = arr[0] < arr[1] ? arr[1] : arr[0];

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]); // 10
