/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */




// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  //   输入：obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
  //   输出：2
  //   解释：3x3 网格的正中间有一个障碍物。
  // 从左上角到右下角一共有 2 条不同的路径：
  //   1. 向右 -> 向右 -> 向下 -> 向下
  //   2. 向下 -> 向下 -> 向右 -> 向右

  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;

  const f = new Array(m).fill(0);

  f[0] = obstacleGrid[0][0] === 1 ? 0 : 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        f[j] = 0;
        continue;
      }

      if (j - 1 >= 0 && obstacleGrid[i][j - 1] < 1) {
        f[j] = f[j] + f[j - 1]
      }
    }
  }

  return f[m - 1]

};
// @lc code=end


