var reverseWords = function (s) {
    let sTrim = s.trim();
    let left = s.length - 1,
        right = s.length - 1;
    let res = [];
    while (left >= 0) {
        while (left >= 0 && sTrim[left] !== ' ') left--;
        // 多加一个空格 来将单词分开，最后trim去掉最后的空格
        res.push(`${sTrim.substring(left + 1, right + 1)} `);
        while (left >= 0 && sTrim[left] === ' ') left--;
        right = left;
    }
    return res.join('').trim();
};

let s = "a good   example";

console.log(reverseWords(s));