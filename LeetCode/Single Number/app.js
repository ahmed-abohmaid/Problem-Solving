/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numsCount = {};
  for (let i = 0; i < nums.length; i++) {
    numsCount[nums[i]] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    numsCount[nums[i]] += 1;
  }
  let bigNum = Math.pow(2, 31) - 1;
  let reqNum;
  for (let num in numsCount) {
    if (numsCount[num] < bigNum) {
      bigNum = numsCount[num];
      reqNum = num;
    }
  }
  return reqNum;
};

console.log(singleNumber([2, 2, 3, 2])); // 3
