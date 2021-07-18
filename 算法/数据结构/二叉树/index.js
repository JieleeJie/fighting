// 定义树节点
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
    show() {
        console.log('value:' + this.value);
    }

}
// 实现二叉查找树类
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    // 插入一个节点
    insert(value) {
        let newNode = new Node(value)
        // 判断根节点是否为空，如果不为空则递归插入到树中
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    // 具体的插入方法
    insertNode(node, newNode) {
        // 将插入节点的值与当前节点的进行比较，
        // 如果比当前节点值小，并且没有左子树，则将节点作为左叶子节点， 否则继续和左子树进行比较。
        // 如果比当前节点值大，并且没有右子树，则将节点作为右叶子节点，否则继续和右子树进行比较。 
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
}

let BSTree = new BinarySearchTree()
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

BSTree.insert(5)
BSTree.insert(2)
BSTree.insert(8)
console.log(BSTree);