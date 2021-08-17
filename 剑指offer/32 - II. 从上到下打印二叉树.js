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
 */
// way1
var levelOrder = function (root) {
    if (!root) return [];
    let res = [], level = 0;
    function levelOrderNode(node, level) {
        if (!res[level]) res[level] = [];
        res[level].push(node.val);
        if (node.left) {
            levelOrderNode(node.left, level + 1);
        }
        if (node.right) {
            levelOrderNode(node.right, level + 1);
        }
    }
    levelOrderNode(root, level);
    return res;
};
// way2
var levelOrder = function (root) {
    if (!root) return [];
    let res = [], queue = [root];
    while (queue.length) {
        let len = queue.length;
        let temp = [];
        // 由len做控制，即使循环中执行了queue.push(),但也不会多shift()
        while (len--) {
            const node = queue.shift();
            temp.push(node.val);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        temp.length && res.push(temp);
    }
    return res;
};

// way3: 结合way1和way2，在way1的基础上省略函数
var levelOrder = function (root) {
    if (!root) return [];
    let res = [], queue = [[root, 0]];
    while (queue.length) {
        // 数组解构
        let [node, level] = queue.shift();
        if (!res[level]) res[level] = [];
        res[level].push(node.val);
        node.left && queue.push([node.left, level + 1]);
        node.right && queue.push([node.right, level + 1]);
    }
    return res;
};