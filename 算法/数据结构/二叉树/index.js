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
    // 先序遍历通过递归实现
    // 先序遍历则先打印当前节点，再递归打印左子节点和右子节点。
    preOrderTraverse() {
        this.preOrderTraverseNode(this.root)
    }
    preOrderTraverseNode(node) {
        if (node !== null) {
            node.show()
            this.preOrderTraverseNode(node.left)
            this.preOrderTraverseNode(node.right)
        }
    }
    // 中序遍历通过递归实现
    // 中序遍历则先递归打印左子节点，再打印当前节点，最后再递归打印右子节点。
    inOrderTraverse() {
        this.inOrderTraverseNode(this.root)
    }
    inOrderTraverseNode(node) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left)
            node.show()
            this.inOrderTraverseNode(node.right)
        }
    }
    // 后序遍历通过递归实现
    // 后序遍历则先递归打印左子节点和右子节点，最后再打印当前节点。
    postOrderTraverse() {
        this.postOrderTraverseNode(this.root)
    }
    postOrderTraverseNode(node) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left)
            this.postOrderTraverseNode(node.right)
            node.show()
        }
    }
    // 先序遍历de循环实现
    // 通过栈来实现循环先序遍历，首先将根节点入栈。然后进入循环，每次循环开始，当前节点出栈，打印当前节点，然后将
    // 右子节点入栈，再将左子节点入栈，然后进入下一循环，直到栈为空结束循环。
    preOrderTraverseByStack() {
        let stack = []
        stack.push(this.root)
        while (stack.length) {
            // 接收出战节点 访问该节点 判断其有没有子节点
            let node = stack.pop()
            node.show()
            // 由于先序遍历是根左右的顺序 
            // 因此左右子节点的入栈顺序应该是反过来的
            if (node.right !== null) {
                stack.push(node.right)
            }
            if (node.left !== null) {
                stack.push(node.left)
            }
        }
    }
    // 中序遍历de循环实现
    // 中序遍历是先左再根最后右
    // 所以首先应该先把最左边节点遍历到底依次 push 进栈
    // 当左边没有节点时，就打印栈顶元素，然后寻找右节点
    inOrderTraverseByStack() {
        let stack = [],
            node = this.root
        // 开始时栈为空，所以加上node不为空的条件
        while (stack.length || node) {
            if (node) {
                stack.push(node)
                node = node.left
            } else {
                node = stack.pop()
                node.show()
                node = node.right
            }
        }
    }

    // 后序遍历通过循环来实现
    // 使用两个栈来是实现，先将根节点放入栈1中，然后进入循环，每次循环将栈顶元素加入栈2，
    // 再依次将左节点和右节点依次加入栈1中，然后进入下一次循环，直到栈1的长度为0。最后再循环打印栈2的值。
    postOrderTraverseByStack() {
        let stack1 = [],
            stack2 = [],
            node = null
        stack1.push(this.root)
        while (stack1.length) {
            node = stack1.pop()
            stack2.push(node)
            // 注意左右顺序
            if (node.left) {
                stack1.push(node.left)
            }
            if (node.right) {
                stack1.push(node.right)
            }
        }
        while (stack2.length) {
            node = stack2.pop()
            node.show()
        }
    }

    // 层次遍历
    levelOrderTraverse() {
        return this.levelOrderTraverseNode(this.root, 0)
    }
    levelOrderTraverseNode(node, level) {
        let result = []
        if (node !== null) {
            // !undefined
            if (!result[level]) {
                result[level] = []
            }
            result[level].push(node.value)
            if (node.left) {
                this.levelOrderTraverseNode(node.left, level + 1)
            }
            if (node.right) {
                this.levelOrderTraverseNode(node.right, level + 1)
            }
        }
        return result
    }

    // 寻找最小值，在最左边的叶子节点上
    findMinNode(root) {
        let node = root
        while (node && node.left) {
            node = node.left
        }
        return node
    }
    // 寻找最大值，在最右边的叶子节点上
    findMaxNode(root) {
        let node = root;
        while (node && node.right) {
            node = node.right;
        }
        return node;
    }
    // 寻找特定值
    find(value) {
        return this.findNode(this.root, value)
    }
    findNode(node, value) {
        if (node === null) {
            return node
        }
        if (node.value < value) {
            return this.findNode(node.right, value)
        } else if (node.value > value) {
            return this.findNode(node.left, value)
        } else {
            return node
        }
    }
    // 移除指定值节点
    // 首先找到需要移除的节点的位置，然后判断该节点是否有叶节点。如果没有叶节点，则直接删除，
    // 如果有一个叶子节点，则用这个叶子节点替换当前的位置。
    // 如果有两个叶子节点，则去右子树中找到最小的节点来替换当前节点。(满足树的特性)
    remove(value) {
        return this.removeNode(this.root, value)
    }
    removeNode(node, value) {
        if (node === null) {
            return node
        }
        if (node.value < value) {
            // 注意，这儿需要赋值给node.right  不同于查找，这是删除，树会发生变化
            node.right = this.removeNode(node.right, value)
            return node
        } else if (node.value > value) {
            node.left = this.removeNode(node.left, value)
            return node
        } else {
            // 值相等  且没有左右子节点 直接将将当前节点删除（置空）
            if (node.left === null && node.right === null) {
                node = null
                return node
            }
            // 若有一个子节点
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }
            // 若有两个子节点
            // 从右节点中找到最小的节点的值（比他大的最小值）
            let aux = this.findMinNode(node.right)
            node.value = aux.value
            // 移除找到的右子树中最小的节点
            node.right = this.removeNode(node.right, aux)
            return node
        }
    }
}

let BSTree = new BinarySearchTree()
BSTree.insert(5)
BSTree.insert(2)
BSTree.insert(8)
BSTree.insert(4)
// console.log('------先序遍历--------');
// BSTree.preOrderTraverse()
// BSTree.preOrderTraverseByStack()
// console.log('------中序遍历--------');
// BSTree.inOrderTraverse()
// BSTree.inOrderTraverseByStack()
// console.log('------后序遍历--------');
// BSTree.postOrderTraverse()
// BSTree.postOrderTraverseByStack()
console.log('------层次遍历-------');
console.log(BSTree.levelOrderTraverse());
// console.log('-------寻找最大最小值-------');
// console.log(BSTree.findMaxNode(BSTree.root));
// console.log('-------寻找指定值-------');
// console.log(BSTree.find(2));
// console.log('-------移除指定值节点-------');
// console.log(BSTree.remove(8));
