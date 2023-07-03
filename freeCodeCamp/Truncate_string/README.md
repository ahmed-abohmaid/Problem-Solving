# Truncate a String

## Problem Statement <br>

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

### Example

```js
truncateString('A-tisket a-tasket A green and yellow basket', 8); // should return A-tisket...
truncateString('Peter Piper picked a peck of pickled peppers', 11); // should return the string Peter Piper....
```

### Solutions <br>

<hr>
The solution checks if the length of the input string is greater than the maximum length. If it is, it uses the substr() method to extract a substring from the beginning of the string up to the maximum length, and appends "..." to the end. If the length of the input string is less than or equal to the maximum length, the function returns the original string.

```js
function truncateString(str, num) {
  let newStr = '';
  if (str.length > num) {
    newStr = `${str.substr(0, num)}...`;
    return newStr;
  } else {
    return str;
  }
}
```

### Testing <br>

The solution has been tested with various inputs and verified for correctness. You can also test the function.

### Conclusion <br>

This problem demonstrates how to truncate a string to a specified length and append a suffix to the end. The solution uses the substr() method to extract a substring from the input string and appends the suffix to the end.
