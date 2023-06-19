# Confirm the Ending

## Problem Statement <br>

Check if a string (first argument, str) ends with the given target string (second argument, target). <br>
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

### Example

```js
confirmEnding("Bastian", "n") // should return true.
confirmEnding("Congratulation", "on") // should return true.
confirmEnding("He has to give me a new name", "name") // should return true.
```

### Solutions

<hr>
This solution uses the substr() method to extract a substring from the end of str with a length equal to the length of target, and then compares it to target using the strict equality operator ===. If they are equal, the function returns true, otherwise it returns false.

```js
function confirmEnding(str, target) {
  if (str.substr(-target.length) === target) { return true; }
  else { return false; }
}
```

### Testing <br>

The solution has been tested with various inputs and verified for correctness. You can also test the function.

### Conclusion <br>
This problem demonstrates how to check if a string ends with a specified substring using a JavaScript substring method. The solution extracts a substring from the end of the string and compares it to the target substring using the strict equality operator.