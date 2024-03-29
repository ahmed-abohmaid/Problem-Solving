https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/?envType=featured-list&envId=challenges-for-new-users

# Number of Steps to Reduce a Number to Zero

Given an integer `num`, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by `2`, otherwise, you have to subtract `1` from it.

### Solution <br>

```js
var numberOfSteps = function (num) {
  let count = 0;

  function check(num) {
    if (num === 0) return;
    if (num % 2 === 0) {
      check(num / 2);
      count += 1;
    } else {
      check(num - 1);
      count += 1;
    }
    return num;
  }

  check(num);
  return count;
};
```

### Examples

Example 1:

```js
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
```

Example 2:

```js
Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.
```

Example 3:

```js
Input: num = 123
Output: 12
```

