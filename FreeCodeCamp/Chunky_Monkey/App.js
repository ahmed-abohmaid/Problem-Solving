function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let reqArr = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr = arr.slice(i, i + size);
    reqArr.push(newArr);
  }

  console.log(reqArr);
  return reqArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]