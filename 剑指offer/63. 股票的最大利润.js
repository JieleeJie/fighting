var maxProfit = function (prices) {
  let minindex = 0,
    maxP = -Infinity; // -999最大负值
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[minindex] > maxP) {
      maxP = prices[i] - prices[minindex];
    }
    if (prices[i] < prices[minindex]) {
      minindex = i;
    }
  }
  return maxP > 0 ? maxP : 0;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));

// var maxProfit = function (prices) {
//   let minprice = Number.MAX_VALUE;
//   let maxprofit = 0;
//   for (const price of prices) {
//     maxprofit = Math.max(price - minprice, maxprofit);
//     minprice = Math.min(price, minprice);
//   }
//   return maxprofit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
