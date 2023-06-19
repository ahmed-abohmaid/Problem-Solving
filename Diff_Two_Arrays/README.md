# Title Case a Sentence

## Problem Statement <br>

You are given two arrays. Your task is to write a function that compares the two arrays and returns a new array containing the items that are only found in one of the two arrays, but not both. The order of the elements in the resulting array doesn't matter.

### Example

```js
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4].
diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
); // should return ["pink wool"].
diffArray(
  ['andesite', 'grass', 'dirt', 'dead shrub'],
  ['andesite', 'grass', 'dirt', 'dead shrub']
); //  should return [].
```

### Solutions <br>

<hr>
The solution involves concatenating the two arrays, and then filtering the concatenated array to include only the items that are not present in both arrays.
<br>
Here's the JavaScript code for the solution:

```js
function diffArray(arr1, arr2) {
  let newArr = arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
  return newArr;
}
```

### Testing <br>

The solution has been tested with the example test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates how to compare two arrays and find the items that are only present in one of the arrays. The solution uses the concat() method to combine the two arrays, and the filter() method with a condition to include only the items that are not present in both arrays.
