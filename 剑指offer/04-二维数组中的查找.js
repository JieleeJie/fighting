// var findNumberIn2DArray = function (matrix, target) {
//     if(!matrix.length || !matrix[0].length) return false

//     let found = false;
//     let rows = matrix.length
//     let colunms = matrix[0].length
//     if (matrix !== null && rows > 0 && colunms > 0) {
//         let row = 0;
//         let colunm = colunms - 1
//         while (row < rows && colunm >= 0) {
//             if (matrix[row][colunm] === target) {
//                 found = true
//                 break
//             } else if (matrix[row][colunm] > target) {
//                 colunm--
//             } else {
//                 row++
//             }
//         }
//     }
//     return found
// };

var findNumberIn2DArray = function (matrix, target) {

};

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

console.log(findNumberIn2DArray(matrix, 99));