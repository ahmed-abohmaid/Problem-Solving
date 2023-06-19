# Return Largest Numbers in Arrays

## Problem Statement <br>

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

### Example

```js
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]); // return [5, 27, 39, 1001]
```

### Solutions

<hr>
This solution uses a nested loop to iterate over each sub-array in the input array and then find the largest number in each sub-array. It initializes a variable maxNum to the smallest possible number using Number.NEGATIVE_INFINITY and then iterates over each number in the sub-array, updating maxNum if it finds a larger number. It then pushes maxNum to a new array and repeats the process for each sub-array, until it has found the largest number in each sub-array.

```js
function largestOfFour(arr) {
  let maxNum,
    newArr = [];
  for (let i = 0; i < arr.length; i++) {
    maxNum = Number.NEGATIVE_INFINITY;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxNum) maxNum = arr[i][j];
    }
    newArr.push(maxNum);
  }
  return newArr;
}
```

### Testing <br>

The solution has been tested with various inputs and verified for correctness. You can also test the function.

### Conclusion <br>

This problem demonstrates how to find the largest number in each sub-array of a given array using nested loops. The solution initializes a variable to the smallest possible number and then iterates over each number in each sub-array, updating the variable if it finds a larger number. It then pushes the largest number to a new array and repeats the process for each sub-array, until it has found the largest number in each sub-array.
