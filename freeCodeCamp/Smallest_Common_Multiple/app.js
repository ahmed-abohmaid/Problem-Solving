function smallestCommons(arr) {
  const [start, end] = arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = start; i <= end; i++) {
    newArr.push(i);
  }

  let i = 1;
  let reqNum = 0;
  while (true) {
    const isDivisible = newArr.every((num) => i % num === 0);
    if (isDivisible) {
      reqNum = i;
      break;
    }
    i++;
  }

  // console.log(reqNum);
  return reqNum;
}

smallestCommons([1, 5]); // 60
