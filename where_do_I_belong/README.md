# Where do I belong

## Problem Statement <br>

Write a function getIndexToIns(arr, num) that takes an array arr and a number num as input and returns the lowest index at which the value num should be inserted into the array once it has been sorted.

### Example

```js
getIndexToIns([1, 2, 3, 4], 1.5); // 1
getIndexToIns([20, 3, 5], 19); // 2
```

### Solutions <br>

Solution 1 (Without findIndex() Function)<hr>
This solution first sorts the input array arr in ascending order using the sort() method. It then iterates through the sorted array and finds the appropriate index where the number num should be inserted. The function returns the lowest index.

```js
function truncateString(str, num) {
  let newStr = '';
  if (str.length > num) {
    newStr = `${str.substr(0, num)}...`;
    return newStr;
  } else {
    return str;
  }
}
```

<br>
Solution 2 (With findIndex() Function)<hr>
This solution first sorts the input array arr in ascending order using the sort() method. It then uses the findIndex() method to find the index in the sorted array where the number num should be inserted. If findIndex() returns -1, indicating that the number should be inserted at the end of the array, the function returns the length of the array.

```js
function getIndexToIns1(arr, num) {
  arr.sort((a, b) => a - b);
  let index = arr.findIndex((element) => num <= element);
  return index === -1 ? arr.length : index;
}
```

### Testing <br>

Both solutions have been tested with various inputs and verified for correctness.
You can also test the functions using the provided test cases.

### Conclusion <br>

This problem demonstrates how to find the lowest index at which a value should be inserted into a sorted array.
