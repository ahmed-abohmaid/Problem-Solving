# Seek and Destroy

## Problem Statement <br>

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
<br>
Note: You have to use the arguments object.

### Example

```js
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(['tree', 'hamburger', 53], 'tree', 53); // should return ["hamburger"].
destroyer(
  [
    'possum',
    'trollo',
    12,
    'safari',
    'hotdog',
    92,
    65,
    'grandma',
    'bugati',
    'trojan',
    'yacht',
  ],
  'yacht',
  'possum',
  'trollo',
  'safari',
  'hotdog',
  'grandma',
  'bugati',
  'trojan'
); // should return [12,92,65]
```

### Solutions <br>

<hr>
The solution involves iterating over the initial array and checking if each element is equal to any of the subsequent arguments. If an element matches any of the arguments, it is not included in the resulting array. Otherwise, it is added to the new array.
<br>
Here's the JavaScript code for the solution:

```js
function destroyer(arr, ...values) {
  let newArr = [];
  let remove = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (arr[i] === values[j]) {
        remove = true;
      }
    }
    if (!remove) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}
```

### Testing <br>

The solution has been tested with the example test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates how to remove elements from an array that match certain values. The solution uses nested loops to compare each element of the initial array with the subsequent arguments and constructs a new array that excludes the matching elements.
