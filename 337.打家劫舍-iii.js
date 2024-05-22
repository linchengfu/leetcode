/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  // f(o) = g(l) + g(r)
  // g(o) = max(f(l), g(l)) + max(f(r), g(r))
  const dfs = (node) => {
    if (node === null) return [0, 0]
    const l = dfs(node.left);
    const r = dfs(node.right);
    const selected = node.val + l[0] + r[0];
    const unSelected = Math.max(l[0], l[1]) + Math.max(r[0], r[1])
    return [selected, unSelected]
  }

  const res = dfs(root)

  return Math.max(res[0], res[1])

};
// @lc code=end

