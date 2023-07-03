/* Solution one */
function findElement(arr, func) {
  let num = 0;
  let flag = 1;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      flag = 1;
      num = arr[i];
      break;
    } else {
      flag = 0;
    }
  }
  if (flag) {
    return num;
  } else {
    return undefined;
  }
}

/* Solution Two */
function findElement2(arr, func) {
  return arr.find(func);
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0); // 8
findElement2([1, 2, 3, 4], (num) => num % 2 === 0); // 8
