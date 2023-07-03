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

translatePigLatin("california")
translatePigLatin('rhythm'); // rhythmay
