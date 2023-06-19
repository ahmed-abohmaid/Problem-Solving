# Repeat a String Repeat a String
## Problem Statement <br>
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

### Example
```js
repeatStringNumTimes("abc", 3); // abcabcabc
```

### Solutions <br>

<hr>
This solution uses a loop to concatenate the string str to a new string newStr num times. If num is less than or equal to zero, it returns an empty string.

```js
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}
```

### Testing <br>
The solution has been tested with various inputs and verified for correctness. You can also test the function.

### Conclusion <br>
This problem demonstrates how to repeat a given string for a specified number of times using a loop. The solution uses a conditional statement to handle the case where num is not a positive number, and concatenates the string to a new string using a loop.
