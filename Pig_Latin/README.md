# Pig Latin

## Problem Statement <br>

Pig Latin is a way of altering English Words. The rules are as follows:
<br>

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add `ay` to it.
  <br>
- If a word begins with a vowel, just add `way` at the end.
  <br>
  Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

### Example

```js
translatePigLatin('paragraphs'); // aragraphspay.
translatePigLatin('glove'); // oveglay.
translatePigLatin('algorithm'); // algorithmway.
translatePigLatin('eight'); // eightway
translatePigLatin('schwartz'); // artzschway
```

### Solutions <br>

<hr>
Here are the steps:
<br>
[1] Create an array vowel that contains the vowels: `['a', 'e', 'o', 'u', 'i']`.
<br>
[2] Convert the input string `str` to lowercase using the `toLowerCase()` method.
<br>
[3] Initialize an empty string `newStr` and an empty string `clusterStr` to store the consonant cluster if present.
<br>
[4] Check if the first character of lowerCaseStr is a vowel by checking if it exists in the vowel array.
<br>
[5] If it is a consonant, iterate through the string until a vowel is found, storing the consonant cluster in clusterStr.
<br>
[6] Construct the Pig Latin string newStr by slicing the lowerCaseStr from the length of clusterStr, appending clusterStr and "ay" at the end.
<br>
[7] If the first character is a vowel, simply append "way" to the lowerCaseStr to form newStr.

```js
function translatePigLatin(str) {
  const vowel = ['a', 'e', 'o', 'u', 'i'];
  const lowerCaseStr = str.toLowerCase();
  let newStr = '';
  let clusterStr = '';

  if (!vowel.includes(lowerCaseStr[0])) {
    let i = 0;
    while (!vowel.includes(lowerCaseStr[i])) {
      clusterStr += lowerCaseStr[i];
      i++;
    }
    newStr = lowerCaseStr.slice(clusterStr.length) + clusterStr + 'ay';
  } else {
    newStr = lowerCaseStr + 'way';
  }

  console.log(newStr);
  return newStr;
}
```

### Testing <br>

The solution has been tested with the example test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates a simple approach to convert a word to Pig Latin. By checking if the word starts with a vowel or a consonant, we can apply the appropriate transformation and generate the Pig Latin equivalent. The solution utilizes string manipulation and conditional logic to achieve the desired result efficiently.
