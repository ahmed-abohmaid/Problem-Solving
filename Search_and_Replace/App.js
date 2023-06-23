function myReplace(str, before, after) {
  let reqWord = '';
  if (before.charCodeAt(0) > 90) {
    reqWord = after[0].toLowerCase() + after.slice(1);
  } else {
    reqWord = after[0].toUpperCase() + after.slice(1);
  }

  console.log(reqWord);

  return str.replace(before, reqWord);
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'); // A quick brown fox leaped over the lazy dog
