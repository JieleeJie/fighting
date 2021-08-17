/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length;
    let i = 0, j = len - 1;
    // 找到右边界
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        // 注意条件：一个>=，一个> 必须是找右边界时带 =，不然结果还不一样。。。
        if (target >= nums[mid]) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    let right = i;
    // 优化点：若数组中无 target ，则提前返回
    // 可优化点：查找完右边界后，左边界 leftleft 一定在闭区间 [0, j][0,j] 中
    if(j >= 0 && nums[j] != target) return 0;
    // 找到左边界
    i = 0, j = len - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (target > nums[mid]) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    let left = j;
    return right - left - 1;
};

let nums = [5, 6, 6, 7, 7, 8, 8, 10], target = 8
console.log(search(nums, target));