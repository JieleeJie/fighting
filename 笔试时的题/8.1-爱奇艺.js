// function only(arr) {
//     if (!Array.isArray(arr) || arr.length <= 0) return
//     let i=0;
//     for (i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//             console.log(i);
//             break;
//         }
//     }
//     if (i === arr.length) {
//         console.log(-1);
//     }
// }

// // let arr = [1,2,3,3,3,2,1]
// let arr = [1, 2, 2, 1, 2, 3, 1, -123, 345, 5, 4, 6]
// only(arr)


/* 
    Nodejs（v6.9.1）输入输出请使用node-stdio模块；
您也可以使用process.stdin、process.stdout或readline。
    有一个长度为n的字符串A（n可能很大，即如果要分配与n相当的buffer则要考虑空间复杂度问题），
    其中的字符是乱序的，请写一个简单的算法，让字符串中不包含任何连续重复的字符，并使该字符串长度尽可能短。
    限定条件：
    1、只能在A上直接操作；
    2、剩下的字符要保持原有的顺序不变。

    样例输入
        abcdefggggfedcbc
    样例输出
        ac
    
    删除重复的gggg后，ff又重复了 。。。
*/

// function NoReaptStr(str) {
//     let arr = []
//     let obj = str.match(/(\w)\1*/g)
//     console.log(obj);
//     for (let i = 0; i < obj.length; i++) {
//         let newArr = obj[i].split('')
//         arr.push(newArr[0])
//     }
//     console.log(arr);
//     let NoReaptStr = arr.toString().replace(/,/g,'')
//     console.log(NoReaptStr);
// }
// let str  = 'abcdefggggfedcbc'
// let str = '1111222233334444'
// NoReaptStr(str)

function NoReaptStr(str) {
    let strToArr = str.match(/(\w)\1*/g)
    console.log(strToArr);
    for (let i = 0; i < strToArr.length; i++) {
        if (strToArr[i].length > 1) {
            strToArr.splice(i, 1)
        }
    }
    console.log(strToArr);
    let toDelCount = 1;
    for (let j = 0; j < strToArr.length - 1; j++) {
        if (strToArr[j] === strToArr[j + 1]) {
            toDelCount++
        }
        if (strToArr[j] !== strToArr[j + 1] && toDelCount !== 1) {
            j = j - toDelCount
            strToArr.splice(j + 1, toDelCount)
            toDelCount = 1
            j-- //气死 忘记循环完后j要+1
        }
    }
    console.log(strToArr);
}

let str = 'abcdefggggfedcbc'
// let str = '1111222233334444'
NoReaptStr(str)