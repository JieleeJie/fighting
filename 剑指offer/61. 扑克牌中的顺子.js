// 排序后，数组末位元素 nums[4]nums[4] 为最大牌；
// 元素 nums[joker]nums[joker] 为最小牌，其中 jokerjoker 为大小王的数量。
var isStraight = function (nums) {
    let joker = 0;
    nums.sort((a,b) => a-b); 
    for (let i = 0; i < 4; i++) {
        if (nums[i] === 0) joker++; // 统计大小王数量
        else if (nums[i] === nums[i + 1]) return false; // 若有重复，提前返回 false
    }
    return nums[4] - nums[joker] < 5; // 最大牌 - 最小牌 < 5 则可构成顺子
};

console.log(isStraight([12,10,1,5,13]));