# Chunky Monkey

## Problem Statement <br>
Write a function that takes an array (arr) and a number (size) as arguments. The function should split the array into groups of the specified size and return them as a two-dimensional array.

### Example

```js
chunkArrayInGroups(["a", "b", "c", "d"], 2) // should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return [[0, 1, 2], [3, 4, 5], [6]].
```

### Solutions <br>

<hr>
The solution initializes an empty array (reqArr) to store the resulting groups. It iterates over the input array (arr) using a for loop and increments the loop counter by the specified size (size). In each iteration, it extracts a slice of the array from the current index to the current index plus the size using the slice() method. The extracted slice is then added to reqArr using the push() method. Finally, the function returns reqArr.

```js
function chunkArrayInGroups(arr, size) {
  let reqArr = [];

  for (let i = 0; i < arr.length; i += size) {
    const newArr = arr.slice(i, i + size);
    reqArr.push(newArr);
  }

  return reqArr;
}
```

### Testing <br>

The solution has been tested with the provided example and additional test cases to ensure its correctness.

```js
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// Output: [ [0, 1], [2, 3], [4, 5] ]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
// Output: [ [0, 1, 2], [3, 4, 5], [6] ]

console.log(chunkArrayInGroups([1, 2, 3, 4, 5], 1));
// Output: [ [1], [2], [3], [4], [5] ]

console.log(chunkArrayInGroups([], 2));
// Output: []

console.log(chunkArrayInGroups([1, 2, 3, 4, 5], 7));
// Output: [ [1, 2, 3, 4, 5] ]
```

### Conclusion <br>

This problem demonstrates how to split an array into groups of a specified size and return them as a two-dimensional array. The solution uses a for loop to iterate over the array and the slice() method to extract slices of the desired size. By pushing the slices into a new array, we can create the desired grouping structure.
