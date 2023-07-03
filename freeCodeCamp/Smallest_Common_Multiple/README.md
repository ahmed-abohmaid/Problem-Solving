# Smallest Common Multiple

## Problem Statement <br>

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
<br><br>
The range will be an array of two numbers that will not necessarily be in numerical order.
<br><br>
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
<br>

### Solution <br>

```js
function smallestCommons(arr) {
  const [start, end] = arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = start; i <= end; i++) {
    newArr.push(i);
  }

  let i = 1;
  let reqNum = 0;
  while (true) {
    const isDivisible = newArr.every((num) => i % num === 0);
    if (isDivisible) {
      reqNum = i;
      break;
    }
    i++;
  }

  // console.log(reqNum);
  return reqNum;
}
```

### Examples

```js
smallestCommons([1, 5]); // 60.
smallestCommons([5, 1]); // 60.
smallestCommons([2, 10]); // 2520.
smallestCommons([1, 13]); // 360360.
smallestCommons([23, 18]); // 6056820.
```

#### Resource

[freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
