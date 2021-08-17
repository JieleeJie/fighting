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
// var findRepeatNumber = function (nums) {
//     let sortedNums = nums.sort()
//     for (let i = 0; i < sortedNums.length - 1; i++) {
//         if (sortedNums[i] === sortedNums[i + 1]) 
//             return sortedNums[i]
//     }
//     return null;
// }

// 在一个长度为 n 的数组 nums 里的所有数字都在 0 ~ n-1 的范围内 。 此说明含义：数组元素的 索引 和 值 是 一对多 的关系。

// 遍历数组 numsnums ，设索引初始值为 i = 0 :
// 若 nums[i] = inums[i]=i ： 说明此数字已在对应索引位置，无需交换，因此跳过；
// 若 nums[nums[i]] = nums[i]nums[nums[i]]=nums[i] ： 代表索引 nums[i]nums[i] 处和索引 ii 处的元素值都为 nums[i]nums[i] ，即找到一组重复值，返回此值 nums[i]nums[i] ；
// 否则： 交换索引为 ii 和 nums[i]nums[i] 的元素值，将此数字交换至对应索引位置。
// 若遍历完毕尚未返回，则返回 -1−1 。

// 1、不能直接[nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]];这样交换 '='左边nums[nums[i]]中的nums[i]会更新
// 2、let temp = nums[i];要加分号。JS不会在方括号[...]前添加一个隐式的分号
var findRepeatNumber = function (nums) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] === i) {
            i++;
            continue;
        }
        if (nums[i] === nums[nums[i]]) {
            return nums[i];
        }
        let temp = nums[i];
        [nums[i], nums[temp]] = [nums[temp], nums[i]];
    }
    return -1
}
// var findRepeatNumber = function(nums) {
//     const length = nums.length;
//     for (let i = 0; i < length; ++i) {
//         //检测下标为i的元素是否放在了位置i上
//         while ((num = nums[i]) !== i) {
//             if (num === nums[num]) {
//                 return num;
//             }
//             [nums[i], nums[num]] = [nums[num], nums[i]];
//         }
//     }
// };
var nums = [2, 3, 1, 0, 2, 5, 3]
console.log(findRepeatNumber(nums));