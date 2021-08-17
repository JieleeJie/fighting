/**
 * @param {number[]} nums
 * @return {number}
 * 如果m正好是数组中第一个数值和下标不相等的下标，则m就是缺失的元素
 */
var missingNumber = function (nums) {
    // 特殊情况1
    if (nums[0] === 1) return 0
    let len = nums.length;
    let left = 0, right = len - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // 中间元素的值和下标相等，下一轮找右半边
        if (mid === nums[mid]) {
            left = mid + 1;
        } else {
            // 中间元素的值和下标不相等，且前一个相等，则该中间元素就是m
            if ((mid - 1) === nums[mid - 1]) {
                return mid;
            } else {
                // 中间元素的值和下标不相等，且前一个也不相等，下一轮找左半边
                right = mid - 1;
            }
        }
    }
    // 特殊情况2：循环结束尚未return 则不缺失 返回len即可
    return len;
};

// 测试样式[0,1,2,3,5,6,7,8,9] 可知 missingNumber1 比 missingNumber比较次数要多
var missingNumber1 = function (nums) {
    let len = nums.length;
    let left = 0, right = len - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid === nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

// const nums = [0, 1, 2, 3, 4, 5, 6, 7, 9]
const nums = [1]
console.log(missingNumber1(nums));