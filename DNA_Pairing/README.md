# DNA Pairing

## Problem Statement <br>

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
<br>
The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
<br>
For example, for the input `GCG`, return `[["G", "C"], ["C","G"], ["G", "C"]]`
<br>
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

### Solutions

```js
function pairElement(str) {
  let DNAObj = { A: ['A', 'T'], T: ['T', 'A'], G: ['G', 'C'], C: ['C', 'G'] };
  let arr = [];

  str.split('').map((char) => arr.push(DNAObj[char]));

  console.log(arr);
  return arr;
}
```

### Examples

```js
pairElement('ATCGA'); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement('TTGAG'); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement('CTCTA'); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
```
