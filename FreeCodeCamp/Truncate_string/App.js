function truncateString(str, num) {
  let newStr = '';
  if (str.length > num) {
    newStr = `${str.substr(0, num)}...`;
    return newStr;
  } else {
    return str;
  }
}

truncateString('A-tisket a-tasket A green and yellow basket', 8); // A-tisket...
