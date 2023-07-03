function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const strLength = str.length;
  const startIndex = alphabet.indexOf(str[0]);

  const correctLetters = alphabet.substr(startIndex, strLength + 1);

  let sum1 = 0, sum2 = 0;

  for (let i = 0; i < correctLetters.length; i++) {
    sum1 += correctLetters.charCodeAt(i);
  }

  for (let i = 0; i < strLength; i++) {
    sum2 += str.charCodeAt(i);
  }

  const diff = sum1 - sum2 === 0 ? undefined : String.fromCharCode(sum1 - sum2);

  console.log(diff);
  return diff;
}

fearNotLetter('stvwx'); // u
