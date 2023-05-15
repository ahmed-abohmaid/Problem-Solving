// Without findeIndex() function
function getIndexToIns(arr, num) {
  let index = 0, flag = false;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (num >= arr[i] && num <= arr[i + 1]) {
      if (num == arr[i]) {
        index = i;
      } else {
        index = i + 1;
      }
      break;
    } else if (!!arr[i + 1] == false) {
      flag = true;
    } else {
      continue;
    }
  }
  return flag? arr.length : index;
}

// With findeIndex() function
function getIndexToIns1(arr, num) {
  arr.sort((a, b) => a - b);
  let index = arr.findIndex((element) => num <= element);
  return index === -1 ? arr.length : index;
}

getIndexToIns([2, 5, 10], 15); // 3
getIndexToIns([10, 20, 30, 40, 50], 35) // 3

getIndexToIns1([2, 5, 10], 15); // 3
getIndexToIns1([10, 20, 30, 40, 50], 35) // 3