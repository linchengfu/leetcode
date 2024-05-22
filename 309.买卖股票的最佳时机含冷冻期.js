/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 买卖股票的最佳时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;

  if (len === 1) {
    return 0
  }

  const unhold = new Array(len);
  const hold = new Array(len);

  unhold[0] = 0;
  hold[0] = -prices[0];
  unhold[1] = Math.max(hold[0] + prices[1], 0);
  hold[1] = Math.max(hold[0], -prices[1])


  for (let i = 2; i < len; i++) {

    unhold[i] = Math.max(hold[i - 1] + prices[i], unhold[i - 1])


    hold[i] = Math.max(unhold[i - 2] - prices[i], hold[i - 1])
  }

  return unhold[len - 1]
};
// @lc code=end

