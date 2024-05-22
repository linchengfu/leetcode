/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let count = 1, tempCount = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      tempCount++
    } else if (nums[i] === nums[i + 1]) {
      tempCount = tempCount
    } else {
      count = Math.max(count, tempCount)
      tempCount = 1
    }


  }

  return count
};
// @lc code=end

