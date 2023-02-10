function findOdd(A) {
  let numberCount = A.reduce((acc, number) => {
    acc[number] = acc[number] ? acc[number] + 1 : 1;
    return acc;
  }, {});

  const result = A.find((number) => numberCount[number] % 2 === 1);
  return result;
}
