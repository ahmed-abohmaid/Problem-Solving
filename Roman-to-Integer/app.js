var romanToInt = function (s) {
  const romanArr = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanArr[s[i]] < romanArr[s[i + 1]]) {
      result += romanArr[s[i + 1]] - romanArr[s[i]] - romanArr[s[i + 1]];
    } else {
      result += romanArr[s[i]];
    }
  }
  return result;
};
