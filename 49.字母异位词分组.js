/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
  // 输出: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
  const object = new Object();
  for (let str of strs) {
    const arr = new Array(26).fill(0);
    for (let s of str) {
      arr[s.charCodeAt() - 'a'.charCodeAt()]++
    }

    object[arr] ? object[arr].push(str) : object[arr] = [str]
  }

  return Object.values(object)

};
// @lc code=end

