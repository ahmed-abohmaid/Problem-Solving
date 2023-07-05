https://leetcode.com/problems/single-number-ii/

# Single Number II (Medium)

Given an integer array `nums` where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

### Solution <br>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numsCount = {};
  for (let i = 0; i < nums.length; i++) {
    numsCount[nums[i]] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    numsCount[nums[i]] += 1;
  }
  let bigNum = Math.pow(2, 31) - 1;
  let reqNum;
  for (let num in numsCount) {
    if (numsCount[num] < bigNum) {
      bigNum = numsCount[num];
      reqNum = num;
    }
  }
  return reqNum;
};

```

### Examples

Example 1:

```js
Input: nums = [2, 2, 3, 2];
Output: 3;
```

Example 2:

```js
Input: nums = [0, 1, 0, 1, 0, 1, 99];
Output: 99;
```

### Constraints

1. `1 <= nums.length <= 3 * 104`

2. `-231 <= nums[i] <= 231 - 1`

3. Each element in `nums` appears exactly three times except for one element which appears once.
