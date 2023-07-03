# Sum All Odd Fibonacci Numbers

## Problem Statement <br>

Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.
<br>
The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
<br>
For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.

### Solution

```js
function sumFibs(num) {
  let sum = 0;

  let i = 1;
  let j = fib(i);
  while (j <= num) {
    if (j % 2 !== 0) {
      sum += j;
    }
    i++;
    j = fib(i);
  }

  // console.log(sum);
  return sum;
}

function fib(num) {
  if (num <= 1) {
    return num;
  }

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= num; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
```

### Examples

```js
sumFibs(1) // 2.
sumFibs(1000) // 1785.
sumFibs(4000000) // 4613732.
sumFibs(4) // 5.
sumFibs(75024) // 60696.
sumFibs(75025) // 135721.
```
