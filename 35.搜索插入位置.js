/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const n = nums.length
  let left = 0, right = n - 1, ans = n;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (target > nums[mid]) {
      left = mid + 1
    } else if (target <= nums[mid]) {
      ans = mid
      right = mid - 1
    }
  }

  return ans
};
// @lc code=end

