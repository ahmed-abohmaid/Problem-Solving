# Arguments Optional

## Problem Statement <br>

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
<br><br>
For example, `addTogether(2, 3)` should return `5`, and `addTogether(2)` should return a function.
<br><br>
Calling this returned function with a single argument will then return the sum:
<br><br>

```js
var sumTwoAnd = addTogether(2);
sumTwoAnd(3); // returns 5.
```

<br><br>
If either argument isn't a valid number, return undefined.

### Solution

```js
function addTogether(num1, num2) {
  const isValidNum = (num) => typeof num === 'number';

  if (arguments.length === 1) {
    if (!isValidNum(num1)) {
      return undefined;
    } else {
      return (num) => {
        if (!isValidNum(num)) {
          return undefined;
        }
        return num1 + num;
      };
    }
  } else if (!isValidNum(num1) || !isValidNum(num2)) {
    return undefined;
  } else {
    return num1 + num2;
  }
}
```

### Examples

```js
addTogether(2, 3); // 5.
addTogether(23, 30); // 53.
addTogether('2', 3); // undefined.
addTogether(5, undefined); // undefined.
addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // undefined.
addTogether(5); // a function.
addTogether(5)(7); // 12.
addTogether(2)([3]); // undefined.
addTogether(2, '3'); // undefined
```
