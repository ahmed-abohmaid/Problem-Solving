# Roman Numeral Converter

## Problem Statement <br>

Convert the given number into a roman numeral.

<br>

| Roman numerals | Arabic numerals |
|--------------- |-----------------|
| M              | 1000            |
| CM             | 900             |
| D              | 500             |
| CD             | 400             |
| C              | 100             |
| XC             | 90              |
| L              | 50              |
| XL             | 40              |
| X              | 10              |
| IX             | 9               |
| V              | 5               |
| IV             | 4               |
| I              | 1               |

<br>

All roman numerals answers should be provided in upper-case.

### Solution <br>

```js
function convertToRoman(num) {
  const romansObj = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };
  let reqStr = '';
  // console.log(Object.keys(romansObj))

  for (const value of Object.keys(romansObj).sort((a, b) => b - a)) {
    while (num >= value) {
      reqStr += romansObj[value];
      num -= value;
    }
  }

  return reqStr;
}
```

### Examples

```js
convertToRoman(2) // II.
convertToRoman(3) // III.
convertToRoman(4) // IV.
convertToRoman(5) // V.
convertToRoman(9) // IX.
convertToRoman(12) // XII.
convertToRoman(16) // XVI.
convertToRoman(29) // XXIX.
convertToRoman(44) // XLIV.
convertToRoman(45) // XLV.
convertToRoman(68) // LXVIII
convertToRoman(83) // LXXXIII
convertToRoman(97) // XCVII
convertToRoman(99) // XCIX
convertToRoman(400) // CD
convertToRoman(500) // D
convertToRoman(501) // DI
convertToRoman(649) // DCXLIX
convertToRoman(798) // DCCXCVIII
convertToRoman(891) // DCCCXCI
convertToRoman(1000) // M
convertToRoman(1004) // MIV
convertToRoman(1006) // MVI
convertToRoman(1023) // MXXIII
convertToRoman(2014) // MMXIV
convertToRoman(3999) // MMMCMXCIX
```

### Resource

[freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)
