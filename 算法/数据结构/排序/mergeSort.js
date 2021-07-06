function mergeSort(array) {
    let length = array.length
    if (!Array.isArray(array) || length <= 1) return

    let mid = length >> 1
    let leftArray = array.slice(0, mid)
    let rightArray = array.slice(mid, length)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
    let result = []
    let leftLength = leftArray.length
    let rightLength = rightArray.length
    let il = 0, ir = 0


    // 左右两个数组的元素依次比较，将较小的元素加入结果数组中，直到其中一个数组的元素全部加入完则停止
    while (il < leftLength && ir < rightLength) {
        if (leftArray[il] < rightArray[ir]) {
            result.push(leftArray[il++]);
        } else {
            result.push(rightArray[ir++]);
        }
    }

    // 如果是左边数组还有剩余，则把剩余的元素全部加入到结果数组中。
    while (il < leftLength) {
        result.push(leftArray[il++]);
    }

    // 如果是右边数组还有剩余，则把剩余的元素全部加入到结果数组中。
    while (ir < rightLength) {
        result.push(rightArray[ir++]);
    }
    return result
}


let arr = [49, 38, 65, 97, 76, 13, 27]
mergeSort(arr)
console.log(arr)

// console.log(arr.length >> 1);
// console.log(arr.length / 2);