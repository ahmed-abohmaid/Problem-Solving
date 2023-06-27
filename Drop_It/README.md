# Drop it

## Problem Statement <br>

Given the array `arr`, iterate through and remove each element starting from the first element (the 0 index) until the function `func` returns `true` when the iterated element is passed through it.
<br><br>
Then return the rest of the array once the condition is satisfied, otherwise, `arr` should be returned as an empty array.
<br>

### Solutions <br>

#### Solution 1

<br>

```js
function dropElements1(arr, func) {
  let newArr = [];

  let i = 0;
  while (i < arr.length) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
      break;
    }
    i++;
  }

  while (++i < arr.length) {
    newArr.push(arr[i]);
  }

  console.log(newArr);
  return newArr;
}
```

#### Solution 2

<br>

```js
function dropElements2(arr, func) {
  let newArr = arr.slice(arr.findIndex(func));

  console.log(newArr);
  return newArr;
}
```

### Examples

```js
dropElements1([1, 2, 3, 4], function (n) {
  return n >= 3;
}); // [3, 4].
dropElements2([1, 2, 3, 4], function (n) {
  return n >= 3;
}); // [3, 4].

dropElements1([1, 2, 3], function (n) {
  return n > 0;
}); // [1, 2, 3].
dropElements2([1, 2, 3], function (n) {
  return n > 0;
}); // [1, 2, 3].

dropElements1([1, 2, 3, 4], function (n) {
  return n > 5;
}); // [].
dropElements2([1, 2, 3, 4], function (n) {
  return n > 5;
}); // [].

dropElements1([1, 2, 3, 7, 4], function (n) {
  return n > 3;
}); // [7, 4].
dropElements2([1, 2, 3, 7, 4], function (n) {
  return n > 3;
}); // [7, 4].
```

### Resource

[https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/](freeCodeCamp)
