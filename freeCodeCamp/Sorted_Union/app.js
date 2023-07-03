function uniteUnique(...arr) {
  let newArr = [];
  let reqArr = [];
  arr.map((ele) => newArr.push(...ele));
  newArr.map((num) => {
    if (!reqArr.includes(num)) {
      reqArr.push(num);
    }
  });
  console.log(newArr);
  console.log(reqArr);
  return reqArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [ 1, 3, 2, 5, 4 ]
