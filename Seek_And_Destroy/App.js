function destroyer(arr, ...values) {
  let newArr = [];
  let remove = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (arr[i] === values[j]) {
        remove = true;
      }
    }
    if (!remove) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]