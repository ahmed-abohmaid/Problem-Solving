# DNA Pairing

## Problem Statement <br>

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
<br>
The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
<br>
For example, for the input `GCG`, return `[["G", "C"], ["C","G"], ["G", "C"]]`
<br>
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

### Example

```js
pairElement('ATCGA'); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement('TTGAG'); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement('CTCTA'); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
```

### Solutions <br>

<hr>
The solution for the "DNA Pairing" problem involves creating an object that maps each DNA character to its corresponding pairing element. This mapping is used to generate pairs for the provided DNA strand. <br>
The `pairElement` function takes an input string `str` representing the DNA strand. It initializes the `DNAObj` object, which maps each DNA character to its corresponding pairing element. The function then splits the input string into an array of characters and uses the `map()` method to iterate over each character. For each character, it retrieves the corresponding pair from the `DNAObj` object and pushes it into the `arr` array. Finally, the function returns the `arr` array containing all the pairs.

```js
function pairElement(str) {
  let DNAObj = { A: ['A', 'T'], T: ['T', 'A'], G: ['G', 'C'], C: ['C', 'G'] };
  let arr = [];

  str.split('').map((char) => arr.push(DNAObj[char]));

  console.log(arr);
  return arr;
}
```

### Testing <br>

The solution has been tested with the example test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates a simple approach to match missing base pairs in a DNA strand. By using an object to map each character to its pairing element, we can easily find the pairs for the given DNA strand. The solution utilizes array methods and object mapping to accomplish the task efficiently.
