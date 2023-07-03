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

rot13('SERR CVMMN!'); // FREE PIZZA!
