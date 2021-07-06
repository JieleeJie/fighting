function bubbleSort(array) {
    if (!Array.isArray(array) || array.length <= 1) return
    
    for (let outer = array.length - 1; outer >= 1; outer--) {
        // flag记录当前循环中是否发生了交换，如果没有发生交换，则说明该序列已经为有序序列了。 
        // 因此我们不需要再执行之后的外层循环，此时可以直接结束。
        let flag = true
        //不是 inner <= outer 避免越界
        for (let inner = 0; inner < outer; inner++) {
            if (array[inner] > array[inner + 1]) {
                [array[inner], array[inner + 1]] = [array[inner + 1], array[inner]]
                flag = false
            }
            if(true) break
        }
    }
}

let arr = [49, 38, 65, 97, 76, 13, 27, 49]
bubbleSort(arr)
console.log(arr)