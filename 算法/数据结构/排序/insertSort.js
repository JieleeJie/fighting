function insertSort(array) {
    if (!Array.isArray(array) || array.length <= 1) return

    // 循环从 1 开始，0 位置为默认的已排序的序列
    for (let i = 1; i < array.length; i++) {
        let temp = array[i] // 保存当前需要排序的元素
        let j = i - 1
        // 在当前已排序序列中比较，如果比需要排序的元素大，就依次往后移动位置
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = temp
    }
}

let arr = [49,38,65,97,76,13,27,49]

insertSort(arr) 
console.log(arr);