class LinkNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
    show() {
        console.log('value:' + this.value)
    }
}

class LinkedList {
    constructor() {
        this.head = new LinkNode(null)
        this.length = 0
    }
    // 尾插法
    insert_tail(value) {
        let newLinkNode = new LinkNode(value)
        // 记录当前元素
        let current = null
        if (this.head.next === null) {
            this.head.next = newLinkNode
        } else {
            // 从头结点开始 找到最后一个元素
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newLinkNode
        }
        this.length++
    }
    // 头插法
    insert_head(value) {
        let newLinkNode = new LinkNode(value)
        // 如果head有指向的节点，则 新节点的指针指向原本head所指向的节点，head指向新的节点
        if (this.head.next) {
            newLinkNode.next = this.head.next
        }
        this.head.next = newLinkNode
        this.length++
    }
    // 任意位置i插入 （尾插） 位置0为头结点
    insert_anywhere(position, value) {
        if (position < 0 || position > this.length) return false

        let newLinkNode = new LinkNode(value)
        let index = 0,
            current = this.head,
            previous = null
        // 使用了= 当index为0的时候，也可以插入
        // 当index = position的时候，current = null，但并不影响，newLinkNode.next 本来也是null
        while (index <= position) {
            previous = current
            current = current.next
            index++
        }
        newLinkNode.next = current
        previous.next = newLinkNode
        this.length++
    }
    // 查找某值对应的节点
    find(value) {
        let current = this.head
        while (current !== null && current.value !== value) {
            current = current.next
        }
        return current
    }
    // 删除节点
    remove(value) {
        let willDeleteNode = this.find(value)
        if (!willDeleteNode) return
        let previous = this.head
        while (previous.next !== willDeleteNode) {
            previous = previous.next
        }
        previous.next = willDeleteNode.next
        this.length--
    }
}

let oneLinkList = new LinkedList()
console.log('-------头插法-------');
oneLinkList.insert_tail(1)
oneLinkList.insert_tail(2)
oneLinkList.insert_tail(3)
// console.log('-------尾插法-------');
// oneLinkList.insert_head(1)
// oneLinkList.insert_head(2)
// oneLinkList.insert_head(3)
// console.log('-------在指定位置插入-------');
// oneLinkList.insert_anywhere(3, 666)
// console.log('-------查找值所对应的节点-------');
// console.log(oneLinkList.find(2))
// console.log('-------删除值所对应的节点-------');
// oneLinkList.remove(0)
// console.log(oneLinkList)

// 翻转单链表
// 使用三个变量分别表示当前节点和当前节点的前后节点
function reverseLinkedList(linkList) {
    // 判断下变量边界问题
    if (!linkList.head || !linkList.head.next) return
    let current = linkList.head,
        before = null,
        after = null
    // 判断当前节点是否为空
    // 不为空就先获取当前节点的下一节点
    // 然后把当前节点的 next 设为上一个节点
    // 然后把 current 设为下一个节点，pre 设为当前节点
    while (current) {
        // 注意看顺序 字、自己赋值给其他之后，其他立马赋值给自己
        after = current.next
        current.next = before
        before = current
        current = after
    }
    return before
}
console.log(reverseLinkedList(oneLinkList));