/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let countMap = {};
  let key = 0;
  countMap[key] = 1;
  let lastVisited;
  for (let i = 0; i < nums.length; i++) {
    if (!lastVisited) lastVisited = nums[i];
    else {
      if (nums[i] === lastVisited) {
        countMap[key] = countMap[key] + 1;
      } else {
        key = i;
        countMap[key] = 1;
        console.log("1", countMap);
      }
      lastVisited = nums[i];
      console.log("2", countMap);
    }
  }
  console.log(countMap);
  console.log(Object.values(countMap));
  return Math.max(...Object.values(countMap));
};
