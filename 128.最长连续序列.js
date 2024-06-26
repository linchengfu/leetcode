/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0
  nums = nums.sort((a, b) => a - b);

  let max = 1, current = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      current++;
      max = Math.max(current, max)
    } else if (nums[i] === nums[i + 1]) {
      continue
    } else {
      current = 1
    }
  }

  return max
};
// @lc code=end

