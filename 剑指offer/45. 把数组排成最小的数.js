let arr = [3, 30, 34, 5, 9];
let arrS = arr.map(String);
console.log(arr, arrS);
// arrS.sort((a, b) => {
//     console.log(typeof a);
//   if (a < b) {
//     // 按某种排序标准进行比较, a 小于 b
//     return 1;
//   }
//   if (a > b) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });
// arrS.sort((a,b) =>  {
//     console.log(a,b);
//     return  (a+b) - (b+a);
// });
arrS.sort((a,b) =>  (a+b) - (b+a));
console.log(arrS.join(''));
// console.log('330' - '303');