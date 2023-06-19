function mutation(arr) {
  let first = arr[0].split("").map(ele => ele.toLowerCase());
  let second = arr[1].split("").map(ele => ele.toLowerCase());
  let flag;
  console.log(first);
  console.log(second);
  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      flag = 1;
    } else {
      flag = 0;
      break;
    }
  };
  return flag ? true : false;
}

mutation(["hello", "Hello"]); // true