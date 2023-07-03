var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    if (s.length < 3) {
      const checkString = s[1] + s[0];
      if (checkString === goal) {
        return true;
      } else {
        return false;
      }
    }

    const charCount = {};
    for (let i = 0; i < s.length; i++) {
      if (charCount[s[i]] === true) {
        // console.log(charCount);
        return true;
      }
      charCount[s[i]] = true;
    }
    // console.log(charCount);
    return false;
  }

  let mismatches = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      mismatches.push([s[i], goal[i]]);
    }
  }
  // console.log(mismatches);

  if (
    mismatches.length === 2 &&
    mismatches[0][0] === mismatches[1][1] &&
    mismatches[0][1] === mismatches[1][0]
  ) {
    return true;
  }

  return false;
};

buddyStrings('abac', 'abad'); // false
buddyStrings('acccccb', 'bccccca'); //true
buddyStrings('aaaaacb', 'aaaaabc'); // true
buddyStrings('ab', 'ba'); // true
buddyStrings('aa', 'aa'); // true
buddyStrings('abab', 'abab'); // true
buddyStrings('abcd', 'abcd'); // false
