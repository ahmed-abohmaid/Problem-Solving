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
The uniteUnique function takes multiple arrays as arguments and returns a new array that contains all unique values from the input arrays in the order they appear. The function follows these steps to solve the problem:
<br>

1. The uniteUnique function takes multiple arrays as arguments and returns a new array that contains all unique values from the input arrays in the order they appear. The function follows these steps to solve the problem:

2. Create an empty array newArr to store all values from the input arrays.

3. Create an empty array reqArr to store the unique values in the desired order.

4. Use the map method to iterate over each array in the input arguments.

5. Within the map callback, use the spread operator ... to push all elements from the current array into newArr.

6. Use the map method again to iterate over each number num in newArr.

7. Check if reqArr does not already include the current number num using the includes method.

8. If num is not already present in reqArr, push it into reqArr.

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

The uniteUnique function takes multiple arrays as input and returns a new array that contains all unique values in the order they appear. By using a combination of array manipulation methods, we can efficiently solve the problem and obtain the desired result.
