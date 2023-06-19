# Finders Keepers

## Problem Statement <br>

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

### Examples

```js
findElement([1, 2, 3, 4], (num) => num % 2 === 0); // should return 2
findElement([1, 3, 5, 9], (num) => num % 2 === 0); // should return undefined
```

### Solutions <br>

<hr>
Solution One <br>
This solution uses a for loop to iterate through each element of the arr. It checks if the func passed as an argument is true for that element. If true, it returns the element, else it returns undefined.

```js
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
```

<hr>
Solution Two <br>
This solution uses the find method to find the first element in the array arr that passes the func test.

```js
function findElement2(arr, func) {
  return arr.find(func);
}
```

### Testing <br>

The solutions have been tested with various inputs and verified for correctness. You can also test the function.

### Conclusion <br>

This problem demonstrates how to find the first element in an array that passes a test function. The first solution uses a loop to iterate through each element and check if the function returns true for that element. The second solution uses the find method to accomplish the same result.
