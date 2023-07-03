# Buddy Strings


## Problem Statement <br>

Given two strings `s` and `goal`, return `true` if you can swap two letters in `s` so the result is equal to `goal`, otherwise, return `false`.
<br><br>
Swapping letters is defined as taking two indices `i` and `j` (0-indexed) such that `i != j` and swapping the characters at `s[i]` and `s[j]`.
<br><br>
For example, swapping at indices `0` and `2` in `"abcd"` results in `"cbad"`.

### Solution <br>

```js
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    if (s.length < 3) {
      const checkString = s[1] + s[0];
      if (checkString === goal) {
        return true;
      } else {
        return false;
      }
    }

    const charCount = {};
    for (let i = 0; i < s.length; i++) {
      if (charCount[s[i]] === true) {
        // console.log(charCount);
        return true;
      }
      charCount[s[i]] = true;
    }
    // console.log(charCount);
    return false;
  }

  let mismatches = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      mismatches.push([s[i], goal[i]]);
    }
  }
  // console.log(mismatches);

  if (
    mismatches.length === 2 &&
    mismatches[0][0] === mismatches[1][1] &&
    mismatches[0][1] === mismatches[1][0]
  ) {
    return true;
  }

  return false;
};
```

### Examples

Example 1:

```js
Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
```

Example 2:

```js
Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
```

Example 3:

```js
Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
```
