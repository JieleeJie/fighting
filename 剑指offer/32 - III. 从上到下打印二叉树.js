/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 
 *  测试样例不通过
    输入
    [1,2,3,4,null,null,5]
    输出
    [[1],[3,2],[5,4]]
    预期结果
    [[1],[3,2],[4,5]]
 */
// var levelOrder = function (root) {
//     if (!root) return [];
//     let res = [], queue = [[root, 0]];
//     while (queue.length) {
//         // 数组解构
//         let [node, level] = queue.shift();
//         if (!res[level]) res[level] = [];
//         res[level].push(node.val);
//         if (level % 2 === 1) {
//             node.left && queue.push([node.left, level + 1]);
//             node.right && queue.push([node.right, level + 1]);
//         } else {
//             node.right && queue.push([node.right, level + 1]);
//             node.left && queue.push([node.left, level + 1]);
//         }
//     }
//     return res;
// };

// way1：利用reverse
// var levelOrder = function (root) {
//     if (!root) return [];
//     let res = [], queue = [root], count = 0;
//     while (queue.length) {
//         let len = queue.length;
//         let temp = [];
//         // 由len做控制，即使循环中执行了queue.push(),但也不会多shift()
//         while (len--) {
//             const node = queue.shift();
//             temp.push(node.val);
//             if (node.left)
//                 queue.push(node.left);
//             if (node.right)
//                 queue.push(node.right);
//         }
//         if (temp.length && count % 2 === 0) {
//             res.push(temp);
//             count++;
//         } else if (temp.length && count % 2 === 1) {
//             res.push(temp.reverse());
//             count++;
//         }
//     }
//     return res;
// };

// way2：双端队列  效率不如way1：使用reverse高
var levelOrder = function (root) {
    if (!root) return [];
    // 层级可用res.length来代替
    let res = [], dequeue = [root];
    while (dequeue.length) {
        let len = dequeue.length;
        let temp = [];
        while (len--) {
            const node = dequeue.shift();
            res.length % 2 === 0 ? temp.push(node.val) : temp.unshift(node.val);
            node.left && dequeue.push(node.left);
            node.right && dequeue.push(node.right);
        }
        temp.length && res.push(temp);
    }
    return res;
};