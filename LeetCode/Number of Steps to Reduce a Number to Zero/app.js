var numberOfSteps = function (num) {
  let count = 0;

  function check(num) {
    if (num === 0) return;
    if (num % 2 === 0) {
      check(num / 2);
      count += 1;
    } else {
      check(num - 1);
      count += 1;
    }
    return num;
  }

  check(num);
  return count;
};

console.log(numberOfSteps(14));
