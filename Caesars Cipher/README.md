# Caesars Cipher

## Problem Statement <br>

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
<br><br>
A common modern use is the [ROT13](https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/) cipher, where the values of the letters are shifted by 13 places. Thus `A ↔ N` , `B ↔ O` and so on.
<br><br>
Write a function which takes a [ROT13](https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/) encoded string as input and returns a decoded string.
<br><br>
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

### Solution <br>

```js
function rot13(str) {
  // console.log(String.fromCharCode(str.charCodeAt(0) - 13));

  let newStr = str
    .split('')
    .map((char) => {
      // console.log(char, /[^\w\s]/.test(char) || char === " ");

      return !(/[^\w\s]/.test(char) || char === ' ')
        ? String.fromCharCode(
            char.charCodeAt(0) - 13 < 65
              ? char.charCodeAt(0) + 13
              : char.charCodeAt(0) - 13
          )
        : char;
    })
    .join('');

  return newStr;
}
```

### Examples

```js
rot13('SERR PBQR PNZC'); // FREE CODE CAMP
rot13('SERR CVMMN!'); // FREE PIZZA!
rot13('SERR YBIR?'); // FREE LOVE?
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
```

### Resource

[freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)
