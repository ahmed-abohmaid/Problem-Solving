# Spinal Tap Case

## Problem Statement <br>

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

### Example

```js
spinalCase('This Is Spinal Tap'); // this-is-spinal-tap.
spinalCase('thisIsSpinalTap'); // this-is-spinal-tap.
spinalCase('The_Andy_Griffith_Show'); // the-andy-griffith-show.
spinalCase('Teletubbies say Eh-oh'); // teletubbies-say-eh-oh.
spinalCase('AllThe-small Things'); // all-the-small-things
```

### Solutions <br>

<hr>
The solution involves using regular expressions and string manipulation to convert the input string to spinal case. Here are the steps:
<br>
[1] Split the input string into an array of words based on the following delimiters: whitespace (\s+), underscores (_), or when encountering a capital letter ((?=[A-Z])).
<br>
[2] Convert each word to lowercase using the toLowerCase() method.
<br>
[3] Join the words in the array using dashes (-) to form the spinal case string.
<br>
[4] Return the resulting spinal case string.

```js
function spinalCase(str) {
  return str
    .split(/\s+|_+|(?=[A-Z])/g)
    .map((char) => char.toLowerCase())
    .join('-');
}
```

### Testing <br>

The solution has been tested with the example test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates a simple approach to convert a string to spinal case. By splitting the string based on delimiters and manipulating the words, we can achieve the desired spinal case format. The solution utilizes regular expressions, array methods, and string manipulation techniques to solve the problem efficiently.
