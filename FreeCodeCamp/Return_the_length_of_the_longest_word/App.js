// Solution 1
function findLongestWordLength1(str) {
  let count = 0;
  let countArr = [0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' || i === str.length - 1) {
      i === str.length - 1 ? countArr.push(count + 1) : countArr.push(count);
      continue;
    } else {
      count += 1;
    }
  }
  let counter = countArr.map((ele, index) =>
    index != 0 ? ele - countArr[index - 1] : 0
  );
  return Math.max(...counter);
}

// Solution 2 with splice function
function findLongestWordLength2(str) {
  let char = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < char.length; i++) {
    if (char[i].length > maxLength) {
      maxLength = char[i].length;
    }
  }

  return maxLength;
}

findLongestWordLength1('The quick brown fox jumped over the lazy dog');
findLongestWordLength2('The quick brown fox jumped over the lazy dog');
