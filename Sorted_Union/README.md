# Sorted Union

## Problem Statement <br>

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
<br>
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
<br>
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

### Example

```js
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]); // [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // [1, 2, 3, 5, 4, 6, 7, 8].
uniteUnique([1, 3, 2], [5, 4], [5, 6]); // [1, 3, 2, 5, 4, 6].
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
```

### Solutions <br>

<hr>
The solution to this problem involves concatenating all the arrays into a single array and then filtering out the duplicate values. To maintain the original order, a set can be used to track the unique values encountered so far. By iterating over the concatenated array and adding each unique value to the set, we can ensure that only unique values are stored.

<br>
Here's the JavaScript code for the solution:

```js
function uniteUnique(...arr) {
  let newArr = [];
  let reqArr = [];
  arr.map((ele) => newArr.push(...ele));
  newArr.map((num) => {
    if (!reqArr.includes(num)) {
      reqArr.push(num);
    }
  });
  console.log(newArr);
  console.log(reqArr);
  return reqArr;
}
```

### Conclusion <br>

This problem demonstrates a straightforward approach to concatenate arrays, remove duplicate values, and maintain the original order of the elements. By utilizing the flat method to concatenate arrays and a Set to track unique values, we can efficiently solve the problem. The solution showcases the use of array methods and sets to accomplish the task effectively.
