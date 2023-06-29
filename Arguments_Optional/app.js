function addTogether(num1, num2) {
  const isValidNum = (num) => typeof num === 'number';

  if (arguments.length === 1) {
    if (!isValidNum(num1)) {
      return undefined;
    } else {
      return (num) => {
        if (!isValidNum(num)) {
          return undefined;
        }
        return num1 + num;
      };
    }
  } else if (!isValidNum(num1) || !isValidNum(num2)) {
    return undefined;
  } else {
    return num1 + num2;
  }
}

addTogether(2, 3); // 5
