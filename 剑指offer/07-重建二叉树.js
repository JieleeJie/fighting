/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let result = []
var buildTreeMine = function (preorder, inorder) {
    let pivot = preorder[0]
    result.push(pivot)
    // 中枢元素在中序遍历中的位置
    let pivotInorderIndex = inorder.indexOf(pivot)
    // console.log(pivotIndex);
    // 以中枢元素为界，中序遍历一分为二
    inorderLeftChild = inorder.slice(0, pivotInorderIndex)
    inorderRightChild = inorder.slice(pivotInorderIndex + 1, inorder.length)
    // console.log(inorderLeftChild, inorderRightChild);
    // 以拆分后的中序遍历数组长度为基础，将先序遍历一分为二
    let pivotPreorderIndex = preorder.indexOf(pivot)
    preorderLeftChild = preorder.slice(pivotPreorderIndex + 1, pivotPreorderIndex + 1 + inorderLeftChild.length)
    preorderRightChild = preorder.slice(pivotPreorderIndex + 1 + inorderLeftChild.length, pivotPreorderIndex + 1 + inorderLeftChild.length + inorderRightChild.length)
    // console.log(preorderLeftChild, preorderRightChild);
    if(preorderLeftChild){
        if(inorderLeftChild){
            buildTree(preorderLeftChild,inorderLeftChild)
        }else{
            result.push(null)
        }
    }else{
        result.push(null)
    }
    if(preorderRightChild){
        if(inorderRightChild){
            buildTree(preorderRightChild,inorderRightChild)
        }else{
            result.push(null)
        }
    }else{
        result.push(null)
    }
    return result
};

let preorder = [3, 9, 8, 20, 15, 7], inorder = [9, 8, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder));
/*
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {number[]} preorder
* @param {number[]} inorder
* @return {TreeNode}
*/
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return

    let rootValue = preorder[0]
    let node = new TreeNode(preorder)

    let index=0
    for (; index < inorder.length; index++) {
        if(inorder[index] === rootValue){
            break;
        }        
    }

    node.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
    node.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    return node;

}