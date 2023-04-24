# Title Case a Sentence

## Problem Statement <br>

You are given a string that contains multiple words. Your task is to write a function that capitalizes the first letter of each word in the string and converts the remaining characters to lower case. The function should return the modified string.

### Example

```js
titleCase("I'm a little tea pot"); // should return "I'm A Little Tea Pot".
titleCase('sHoRt AnD sToUt'); // should return the string "Short And Stout".
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // should return the string "Here Is My Handle Here Is My Spout".
```

### Solutions <br>

<hr>
This solution uses the `split()`, `map()`, `toUpperCase()`, `substr()` and `join()` methods to capitalize the first letter of each word and convert the remaining characters to lower case.

```js
function titleCase(str) {
  return str
    .split(' ')
    .map((str) => str[0].toUpperCase() + str.substr(1).toLowerCase())
    .join(' ');
}
```

### Testing <br>

The solution has been tested with various inputs and verified for correctness. You can also test the function.

### Conclusion <br>

This problem demonstrates how to capitalize the first letter of each word in a given string and convert the remaining characters to lower case. The solution uses split() to convert the string to an array, map() to capitalize the first letter of each word, toUpperCase() and substr() to convert the first letter to upper case and convert the remaining characters to lower case, and join() to convert the array back to a string.
