function dropElements1(arr, func) {
  let newArr = [];

  let i = 0;
  while (i < arr.length) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
      break;
    }
    i++;
  }

  while (++i < arr.length) {
    newArr.push(arr[i]);
  }

  console.log(newArr);
  return newArr;
}

function dropElements2(arr, func) {
  let newArr = arr.slice(arr.findIndex(func));

  console.log(newArr);
  return newArr;
}

dropElements1([1, 2, 3, 4], function (n) {
  return n >= 3;
}); // [3, 4]
dropElements2([1, 2, 3, 4], function (n) {
  return n >= 3;
}); // [3, 4]
