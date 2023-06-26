function sumFibs(num) {
  let sum = 0;

  let i = 1;
  let j = fib(i);
  while (j <= num) {
    if (j % 2 !== 0) {
      sum += j;
    }
    i++;
    j = fib(i);
  }

  // console.log(sum);
  return sum;
}

function fib(num) {
  if (num <= 1) {
    return num;
  }

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= num; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

// console.log(fib(3));
sumFibs(10); // 10
