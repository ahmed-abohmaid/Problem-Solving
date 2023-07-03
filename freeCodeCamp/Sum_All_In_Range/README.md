# Sum All In Range

## Problem Statement <br>

You are given an array of two numbers. Your task is to write a function that calculates the sum of the two numbers and the sum of all the numbers between them, inclusive. The lowest number in the array will not always come first.

### Example

```js
sumAll([1, 4]) //should return 10.
sumAll([4, 1]) //should return 10.
sumAll([5, 10]) // should return 45.
sumAll([10, 5]) // should return 45.
```

### Solutions <br>

<hr>
The solution involves finding the minimum and maximum numbers in the array and then summing all the numbers between them, including the minimum and maximum.

Here's the JavaScript code for the solution:

```js
function sumAll(arr) {
  let sum = 0;
  let start = arr[0] < arr[1] ? arr[0] : arr[1];
  let end = arr[0] < arr[1] ? arr[1] : arr[0];

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
```

### Testing <br>

The solution has been tested with the example test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates how to find the sum of two numbers and the sum of all the numbers between them. The solution uses the Math.min() and Math.max() functions to find the minimum and maximum numbers, and then iterates through the range using a for loop to calculate the sum.
