var maxSubArray = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 1], 0);
    res = Math.max(res, nums[i]);
  }
  return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
