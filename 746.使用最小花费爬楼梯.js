/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {

  //   输入：cost = [10, 15, 20]
  //   输出：15
  //   解释：你将从下标为 1 的台阶开始。
  //   - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
  // 总花费为 15 。


  const n = cost.length;
  const dp = new Array(n + 1);
  dp[0] = dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];

};
// @lc code=end

