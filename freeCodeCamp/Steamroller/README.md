# Steamroller

## Problem Statement <br>

Flatten a nested array. You must account for varying levels of nesting.

### Solution

```js
function steamrollArray(arr) {
  let newArr = [];

  let flatTheArr = (arr) => {
    arr.forEach((ele) => {
      if (Array.isArray(ele)) {
        flatTheArr(ele);
      } else {
        newArr.push(ele);
      }
    });
  };

  flatTheArr(arr);
  // console.log(newArr);

  return newArr;
}
```

### Examples

```js
steamrollArray([[['a']], [['b']]]); // ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]); // [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4].

// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

// Global variables should not be used.
```
