/**
 * @param {string} s
 * @return {character}
 */


var firstUniqChar = function (s) {
    // for (let i = 0; i < s.length; i++) {
    //     // 测试样例'cc'无法通过
            // 对于连续出现两个重复的字符，后面不再出现 无法通过， 必须得从first+1开始找
    //     let findIndex = -1;
    //     findIndex = s.indexOf(s[i], i + 1)
    //     if(findIndex === -1) return s[i];
    // }

    for (let i = 0; i < s.length; i++) {
        let first = s.indexOf(s[i]);
        let second = s.indexOf(s[i], first + 1)
        if (second === -1) return s[i];
    }
    return ' ';
};
console.log(firstUniqChar('cc'));
console.log(firstUniqChar('abaccdeff'));
console.log(firstUniqChar(''));