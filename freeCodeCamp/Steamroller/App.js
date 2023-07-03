function steamrollArray(arr) {
  let newArr = [];

  let flatTheArr = (arr) => {
    arr.forEach((ele) => {
      if (Array.isArray(ele)) {
        flatTheArr(ele);
      } else {
        newArr.push(ele);
      }
    });
  };

  flatTheArr(arr);
  // console.log(newArr);

  return newArr;
}

steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4]
