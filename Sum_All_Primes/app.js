function sumPrimes(num) {
  let primeNums = getPrime(num);
  let sum = 0;

  for (let i = 0; i < primeNums.length; i++) {
    sum += primeNums[i];
  }

  return sum;
}

function getPrime(num) {
  let primeArr = [];

  // Get prime numbers
  for (let i = 2; i <= num; i++) {
    let isPrime = 1;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = 0;
      }
    }

    if (isPrime) {
      primeArr.push(i);
    }
  }

  return primeArr;
}

sumPrimes(10); // 17
