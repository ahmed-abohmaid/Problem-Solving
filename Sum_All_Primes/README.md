# Sum All Primes

## Problem Statement <br>

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
<br>
Rewrite `sumPrimes` so it returns the sum of all prime numbers that are less than or equal to num.

### Solution

```js
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
```

### Examples

```js
sumPrimes(10); // 17.
sumPrimes(977); // 73156.
```
