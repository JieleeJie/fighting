// 借助indexOf() 和 lastIndexOf()
// var findRepeatNumber = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
//             return nums[i]
//         }
//     }
// };


// 1.遍历nums,当前数字存在于哈希表中，返回即可
// 2.哈希表不存在当前数字，则将该数字加入到哈希表。
// var findRepeatNumber = function (nums) {
//     let map = new Map()
//     for(let val of nums){
//         if(map.has(val))
//             return val
//         map.set(val,1)
//     }
// }

// 先排序再判断
var findRepeatNumber = function (nums) {
    let sortedNums = nums.sort()
    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) 
            return sortedNums[i]
    }
    return null;
}

var nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums));