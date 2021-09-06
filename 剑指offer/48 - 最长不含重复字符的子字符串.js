// dp[j]代表以字符 s[j] 为结尾的 “最长不重复子字符串” 的长度。
// 设字符 s[j] 左边距离最近的相同字符为 s[i]
// 对于'abcabcbb'  当j = 4时，以字符 s[4] (b) 为结尾的 “最长不重复子字符串” 为 cab
// 当 dp[j - 1] < j - i ，说明字符 s[i] 在子字符串 dp[j-1] 区间之外 ，则 dp[j] = dp[j - 1] + 1
// 当 dp[j − 1] ≥ j − i ，说明字符 s[i] 在子字符串 dp[j-1] 区间之中 ，则 dp[j] 的左边界由 s[i] 决定，即 dp[j] = j - i

var lengthOfLongestSubstring = function (s) {
  if (s === "") return 0;
  let map = new Map();
  let dp = [1];
  map.set(s[0], 0);
  for (let j = 1; j < s.length; j++) {
    let i = map.get(s[j]) ?? -1;
    map.set(s[j], j);
    if (j - i > dp[j - 1]) {
      dp[j] = dp[j - 1] + 1;
    } else {
      dp[j] = j - i;
    }
  }
  console.log(dp);
  return Math.max(...dp);
};

console.log(lengthOfLongestSubstring(""));
