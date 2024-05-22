/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length, n = matrix[0].length;

  const columnArr = [];
  for (let i = 0; i < m; i++) {
    columnArr.push(matrix[i][0])
  }

  let left = 0, right = m - 1, index = 0;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (matrix[mid][0] < target) {
      index = mid
      left = mid + 1
    } else if (matrix[mid][0] > target) {
      right = mid - 1
    } else {
      return true
    }
  }

  const newArr = matrix[index]
  left = 0, right = n - 1

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (newArr[mid] < target) {
      index = mid
      left = mid + 1
    } else if (newArr[mid] > target) {
      right = mid - 1
    } else {
      return true
    }
  }





};
// @lc code=end

