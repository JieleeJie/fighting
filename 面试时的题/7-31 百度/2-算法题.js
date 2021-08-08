/*
    给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
    示例 1：
    输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
    输出：6
    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
*/

/* 
    给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
    你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
    返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
    示例 1：
    输入：[7,1,5,3,6,4]
    输出：5
    解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
*/

// function getMax(arr) {
//     let minindex = 0,
//         maxP = -9999 // -999最大负值
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] - arr[minindex] > maxP) {
//             maxP = arr[i] - arr[minindex]
//             if (arr[i] < arr[minindex]) {
//                 minindex = i
//             }
//         }
//     }
//     return maxP
// } 

/* 
    给定一个二叉树，返回所有从根节点到叶子节点的路径。
    说明: 叶子节点是指没有子节点的节点。
    示例:
    输入:
    1
    /   \
    2     3
    \
    5
    输出: ["1->2->5", "1->3"]
    解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
*/

/* 递归不知道如何存入数组 */
function getAllRoute(node){
    let route = []
    while(node.left || node.right){
        let oneRoute = []
        oneRoute.push(node.value)
        getAllRoute(node.left)
        getAllRoute(node.right)
    }
    // while(node.right){
    //     console.log(node.value);
    //     getAllRoute(node.right)
    // }
}