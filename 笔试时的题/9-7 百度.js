// // 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input = "";
// var input_array = "";

// process.stdin.on('data', function (data) {
//     input += data;
// });

// process.stdin.on('end', function () {
//     input_array = input.split("\n");
//     var nLine = 0;

//     while(nLine < input_array.length){
//         var line = input_array[nLine++].trim();
//         if(line === ''){
//             continue;
//         }
//         var input_arrays = line.split(' ');
//         var a = +input_arrays[0];
//         var b = +input_arrays[1];
//         console.log(a+b);
//     }
// });

// 本题为考试多行输入输出规范示例，无需提交，不计分。
// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal:false
// });

// var n = -1;// 初始状态为负数，表示还没开始读取
// var ans = 0;
// var cur_line = 0;
// rl.on('line', function(line){ // javascript每行数据的回调接口
//    if (n < 0) { // 测试用例第一行读取n
//        n = parseInt(line.trim())
//    } else {
//        // 矩阵数据读取
//           var tokens = line.split(' ');
//        for (var i = 0; i < tokens.length; ++i) {
//            // 题目逻辑求和，边读取边计算
//            ans += parseInt(tokens[i]);
//        }
//        // 记录当前读取的行数
//        cur_line += 1;
//    }

//    // 读取行数结束，如果确定只有一行额外的数据输入，也可以通过cur_line === 1来判断
//    if (n === cur_line) {
//        // 输出结果
//        console.log(ans);
//        // 重新初始化相关变量
//        n = -1;
//        ans = 0;
//        cur_line = 0;
//    }
// });

// let zfxLength = 3;
// let scale = 3;
// let test1 = [
//   [1, 1],
//   [1, 1],
// ];
// let test2 = [
//   [2, 2],
//   [2, 2],
// ];
// console.log(test1.concat(test2));

// function toZFX(num, scale) {
//   let rectangle = [];
//   for (let i = 0; i < scale; i++) {
//     let temp = [];
//     for (let j = 0; j < scale; j++) {
//       temp.push(num);
//     }
//     rectangle.push(temp);
//   }
//   return rectangle;
// }

// let zfx = [
//   [0, 1],
//   [1, 0],
// ];
// let scale = 2;
// let final = [];
// for (let i = 0; i < zfx.length; i++) {
//   for (let j = 0; j < zfx[0].length; j++) {
//     final.push(toZFX(zfx[i][j], scale));
//   }
// }
// console.log(final);
// console.log('*********');
// console.log(final.flat(10));

// const solution = (n, arr) => {
//   let sums = [];
//   for (let i = 0; i < arr.length; i++) {
//     const temp = arr[i];
//     let sum = 0;
//     const halfTemp = Math.floor(temp / 2);
//     for (let j = 1; j < halfTemp; j++) {
//       if (j ** 2 > temp) break;
//       if (
//         Number.isInteger(temp / j) &&
//         (!Number.isInteger(temp / j / j) || j === 1)
//       ) {
//         sum++;
//       }
//     }
//     sums.push(sum);
//   }
//   return sums;
// };
// let res = solution(2, [16, 2021])
// for (const val of res) {
//     console.log(val);
// }

const solution = (n) => {
  let res = 0,
    p = 1,
    flagNum = 0;
  while (n) {
    let curNum = (n % 10) - flagNum;
    flagNum = 0;
    if (curNum >= 3) {
      res += p * 3;
    } else if (curNum >= 1) {
      res += p * curNum;
    } else if (Math.floor(n / 10)) {
      res += p * 3;
      flagNum++;
    }
    p *= 10;
    n = Math.floor(n / 10);
  }
  return res;
};

console.log(solution(100));
