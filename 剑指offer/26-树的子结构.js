/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * 本题考查深度搜索和递归
    一.dfs方法
    1.dfs的起点，从A, B根结点同时出发开始搜索A, B的结点
    2.递归出口，
    若B先深度搜索完，说明前面的值都匹配正确，return true
    若A先深度搜索完，说明越界（B树的结点比A树还多），return false
    3.中途结束条件，
    若A有结点值与B有结点值不相等，匹配失败，return false
    否则继续A,B对应的左右子树递归匹配
    二.isSubStructrue方法
    若以从A, B根结点同时出发开始的dfs匹配成功，return true
    若失败，则以A的左右子树进行递归，即对A的dfs起点更换
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 * 
 */
var isSubStructure = function (A, B) {
    if (A === null || B === null) return false;
    return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

var recur = function (A, B) {
    // 当节点 BB 为空：说明树 BB 已匹配完成（越过叶子节点），因此返回 true 
    if (B === null) return true;
    // 若A先深度搜索完，说明B树的结点比A树还多 或  A有结点值与B有结点值不相等 return false
    if (A === null || A.val !== B.val) return false;
    // 如果A节点和B节点的值相等，则继续递归
    return recur(A.left, B.left) && recur(A.right, B.right);
};
