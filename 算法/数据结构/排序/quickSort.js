function quickSort(array, start, end) {
    if (!Array.isArray(array) || array.length <= 1 || start >= end) return;

    let index = partion(array, start, end);
    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
}

function partion(array, start, end) {
    let pivot = array[start];

    while (start < end) {
        while (array[end] >= pivot && start < end) {
            end--;
        }
        array[start] = array[end];
        while (array[start] < pivot && start < end) {
            start++;
        }
        array[end] = array[start];
    }

    array[start] = pivot;
    return start;
}

let arr = [49, 38, 65, 97, 76, 13, 27, 49];

quickSort(arr, 0, arr.length - 1);

console.log(arr);