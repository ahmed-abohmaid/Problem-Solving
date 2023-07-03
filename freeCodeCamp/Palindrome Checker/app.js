function palindrome(str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversedStr = '';

  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedStr += newStr[i];
  }

  // console.log(newStr);
  // console.log(reversedStr);

  if (newStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}

palindrome('eye'); // true
