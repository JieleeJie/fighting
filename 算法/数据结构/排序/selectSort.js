function selectSort(array) {
    if (!Array.isArray(array) || array.length <= 1) return
    
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[minIndex])
                minIndex = j
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
}

let arr = [49, 38, 65, 97, 76, 13, 27, 49]
selectSort(arr)
console.log(arr);