# Mutaions

## Problem Statement <br>
Given an array with two strings, return true if the string in the first element of the array contains all of the letters of the string in the second element of the array (ignoring case), and false otherwise.

### Example

```js
containsAllLetters(["hello", "Hello"]); // should return true
containsAllLetters(["hello", "hey"]); // should return false
containsAllLetters(["Alien", "line"]); // should return true
```

### Solutions <br>

<hr>
The solution converts both strings to lowercase using the toLowerCase() method to ignore case. Then, it checks if each character in the second string exists in the first string. If any character is not found, it returns false. If all characters are found, it returns true.

```js
function containsAllLetters(arr) {
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (str1.indexOf(char) === -1) {
      return false;
    }
  }

  return true;
}
```

### Testing <br>

The solution has been tested with the provided examples and additional test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates how to check if a string contains all the letters of another string, while ignoring case. The solution converts both strings to lowercase and iterates over each character in the second string, checking if it exists in the first string. By returning false if any character is not found, we can determine if the first string contains all the letters of the second string.
