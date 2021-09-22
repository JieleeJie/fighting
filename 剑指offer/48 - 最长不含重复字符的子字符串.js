/**
 * dp[j]代表以字符 s[j] 为结尾的 “最长不重复子字符串” 的长度。
 * 设字符 s[j] 左边距离最近的相同字符为 s[i]
 * 对于'abcabcbb'  当j = 4时，以字符 s[4] (b) 为结尾的 “最长不重复子字符串” 为 cab
 * 当 dp[j - 1] < j - i ，说明字符 s[i] 在子字符串 dp[j-1] 区间之外 ，则 dp[j] = dp[j - 1] + 1
 * 当 dp[j − 1] ≥ j − i ，说明字符 s[i] 在子字符串 dp[j-1] 区间之中 ，则 dp[j] 的左边界由 s[i] 决定，即 dp[j] = j - i
 */

// 动态规划
// var lengthOfLongestSubstring = function (s) {
//   if (s === "") return 0;
//   let map = new Map();
//   let dp = [1];
//   map.set(s[0], 0);
//   for (let j = 1; j < s.length; j++) {
//     let i = map.get(s[j]) ?? -1;
//     map.set(s[j], j);
//     if (j - i > dp[j - 1]) {
//       dp[j] = dp[j - 1] + 1;
//     } else {
//       dp[j] = j - i;
//     }
//   }
//   return Math.max(...dp);
// };

// 双指针
var lengthOfLongestSubstring1 = function (s) {
  let subStr = "";
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    //查找 当前字符在子串中出现的位置
    let temp = subStr.indexOf(s[i]);
    // 如果在子串中找着了
    if (temp !== -1) {
      //判断当前子串 与 历史最长串的大小
      if (maxLength < subStr.length) {
        maxLength = subStr.length;
      }
      // 去掉前temp+1个字符（后面会添加当前字符的）,
      subStr = subStr.slice(temp + 1, i);
      // subStr = subStr.substring(temp + 1, i);
    }
    // 不管找没找着，都需要将当前的字符添加到子串中
    subStr += s[i];
  }
  // 最终还是要判断一次，因为如果从来都没有重复过的话，没有更新maxLength
  if (maxLength < subStr.length) {
    maxLength = subStr.length;
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring1("pwwkew"));
