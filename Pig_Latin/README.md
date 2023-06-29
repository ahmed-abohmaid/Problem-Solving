# Pig Latin

## Problem Statement <br>

Pig Latin is a way of altering English Words. The rules are as follows:
<br>

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add `ay` to it.
  <br>
- If a word begins with a vowel, just add `way` at the end.
  <br>
  Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

### Solution <br>

```js
function translatePigLatin(str) {
  const vowel = ['a', 'e', 'o', 'u', 'i'];
  const lowerCaseStr = str.toLowerCase();
  let newStr = '';
  let clusterStr = '';

  if (!vowel.includes(lowerCaseStr[0])) {
    let i = 0;
    while (!vowel.includes(lowerCaseStr[i]) && i < str.length) {
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

### Examples

```js
translatePigLatin('paragraphs'); // aragraphspay.
translatePigLatin('glove'); // oveglay.
translatePigLatin('algorithm'); // algorithmway.
translatePigLatin('eight'); // eightway
translatePigLatin('schwartz'); // artzschway

// Should handle words where the first vowel comes in the middle of the word.
translatePigLatin('schwartz'); // artzschway.

// Should handle words without vowels.
translatePigLatin('rhythm'); // rhythmay.
```
