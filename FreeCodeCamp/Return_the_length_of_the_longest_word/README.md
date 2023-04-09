# Longest Word Length
## Problem Statement <br>
Write a function findLongestWordLength(str) that takes a string as input and returns the length of the longest word in the string.

Example
```js
findLongestWordLength('The quick brown fox jumped over the lazy dog'); // 6
```

Solutions <br>
Two possible solutions are presented below:
<br>

Solution 1
---
This solution uses a loop to iterate through each character of the string. It keeps track of the length of each word encountered and stores it in an array. The function then returns the maximum value in the array.
---

```js
function findLongestWordLength1(str) {
  let count = 0;
  let countArr = [0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' || i === str.length - 1) {
      i === str.length - 1 ? countArr.push(count + 1) : countArr.push(count);
      continue;
    } else {
      count += 1;
    }
  }
  let counter = countArr.map((ele, index) =>
    index != 0 ? ele - countArr[index - 1] : 0
  );
  return Math.max(...counter);
}
```

Solution 2
---
This solution splits the string into an array of words using the split() method. It then iterates through each word in the array and stores the length of the longest word encountered in a variable. The function returns the value of the variable.
---

```js
Copy code
function findLongestWordLength2(str) {
  let char = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < char.length; i++) {
    if (char[i].length > maxLength) {
      maxLength = char[i].length;
    }
  }

  return maxLength;
}
```

Both solutions produce the same result. You can use either of these solutions based on your preference.

Testing
Both solutions have been tested with various inputs and verified for correctness.

You can also test the function using the findLongestWordLength1() and findLongestWordLength2() functions provided in the code above.

Conclusion
This problem demonstrates how to find the length of the longest word in a given string.
