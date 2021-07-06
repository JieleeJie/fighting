function binarySearch(array, left, right, target) {
    if (!Array.isArray(array)) return

    while (left <= right) {
        let mid = (left + right) / 2
        if (array[mid] === target) {
            // 处理有序序列中含有重复元素，返回第一个出现target的下标
            // while (mid >= 0) {
            //     if (array[mid] !== target) break;
            //     mid--;
            //     return mid + 1
            // }
            return mid
        }
        else if (array[mid] > target)
            right = mid - 1
        else
            left = mid + 1;
    }
    return 0
}

// let arr = [13, 27, 38, 49, 49, 65, 76, 97]
let arr = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 5, 8, 13, 21, 34, 55];

console.log(binarySearch(arr, 0, arr.length - 1, 2));