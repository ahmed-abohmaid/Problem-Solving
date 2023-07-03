# Everything Be True

## Problem Statement <br>

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
<br>
<br>
In other words, you are given an array collection of objects. The predicate `pre` will be an object property and you need to return `true` if its value is `truthy`. Otherwise, return `false`.
<br>
<br>
In JavaScript, `truthy` values are values that translate to `true` when evaluated in a Boolean context.
<br>
<br>
Remember, you can access object properties through either dot notation or `[]`notation.

### Solution

```js
function truthCheck(collection, pre) {
  for (let obj of collection) {
    if (!obj[pre]) {
      return false;
    }
  }

  return true;
}
```

### Examples

```js
truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'name'
); // true.
truthCheck(
  [
    { name: 'Quincy', role: 'Founder', isBot: false },
    { name: 'Naomi', role: '', isBot: false },
    { name: 'Camperbot', role: 'Bot', isBot: true },
  ],
  'role'
); // false.
truthCheck(
  [
    { name: 'Pikachu', number: 25, caught: 3 },
    { name: 'Togepi', number: 175, caught: 1 },
  ],
  'number'
); // true.
truthCheck(
  [
    { name: 'Pikachu', number: 25, caught: 3 },
    { name: 'Togepi', number: 175, caught: 1 },
    { name: 'MissingNo', number: NaN, caught: 0 },
  ],
  'caught'
); // false.
truthCheck(
  [
    { name: 'Pikachu', number: 25, caught: 3 },
    { name: 'Togepi', number: 175, caught: 1 },
    { name: 'MissingNo', number: NaN, caught: 0 },
  ],
  'number'
); // false.
truthCheck(
  [
    { name: 'Quincy', username: 'QuincyLarson' },
    { name: 'Naomi', username: 'nhcarrigan' },
    { name: 'Camperbot' },
  ],
  'username'
); // false
```
