# Missing letters

## Problem Statement <br>
Find the missing letter in the passed letter range and return it.
<br>
If all letters are present in the range, return undefined.

### Example

```js
fearNotLetter("abce") // d
fearNotLetter("abcdefghjklmno") // i
fearNotLetter("stvwx") // u
fearNotLetter("bcdf") // e
fearNotLetter("abcdefghijklmnopqrstuvwxyz") // undefined
```

### Solutions <br>

<hr>
The solution for the "Missing letters" problem involves finding the missing letter in a given letter range. The fearNotLetter function takes a string str representing the letter range and returns the missing letter. If all letters are present in the range, the function returns undefined.  <br>
The fearNotLetter function follows the described steps to find the missing letter in the given letter range. It creates a string alphabet representing the alphabet in lowercase, determines the starting index of the range within alphabet, extracts the corresponding substring, calculates the sum of character codes for both the range and the input string, and finally computes the difference to find the missing letter. The function returns the missing letter or undefined if all letters are present.

```js
function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const strLength = str.length;
  const startIndex = alphabet.indexOf(str[0]);

  const correctLetters = alphabet.substr(startIndex, strLength + 1);

  let sum1 = 0, sum2 = 0;

  for (let i = 0; i < correctLetters.length; i++) {
    sum1 += correctLetters.charCodeAt(i);
  }

  for (let i = 0; i < strLength; i++) {
    sum2 += str.charCodeAt(i);
  }

  const diff = sum1 - sum2 === 0 ? undefined : String.fromCharCode(sum1 - sum2);

  console.log(diff);
  return diff;
}
```

### Testing <br>

The solution has been tested with the example test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates a simple approach to find the missing letter within a given letter range. By utilizing string manipulation, character code calculations, and comparison, we can efficiently identify the missing letter or determine if all letters are present. The solution showcases the use of basic string operations and looping to accomplish the task effectively.
