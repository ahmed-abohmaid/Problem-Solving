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

convertToRoman(36); // XXXVI
