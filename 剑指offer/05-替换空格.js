let s = "We are happy."
// 将字符串转成字符数组
let sArr = s.split('')
// 记录原来的length
let rawSArrLength = sArr.length
// 求字符串中空格的个数
let spaceCount = 0
for (let val of sArr) {
    if (val === ' ') spaceCount++
}
// 一个空格变为 %20 需要多两个字符
sArr.length += 2 * spaceCount
for (let i = rawSArrLength - 1, j = sArr.length - 1; i < j; i--, j--) {
    if (sArr[i] !== ' ') {
        sArr[j] = sArr[i]
    } else {
        sArr[j] = '0'
        sArr[j - 1] = '2'
        sArr[j - 2] = '%'
        j -= 2
    }
}
console.log(sArr);