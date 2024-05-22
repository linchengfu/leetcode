/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])
  const len = nums.length;
  const dp = new Array(len);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
  }
  return dp[len - 1]

};

const fib = (i) => {
  if (i == 0 || i == 1) return 1
  return fib(i - 1) + fib(i - 2)
}

const fib2 = (i) => {
  const dp = new Array(i + 1);
  dp[0] = dp[1] = 1
  for (let i = 2; i <= i; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[i]

}

let bubbleSort = (nums) => {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }

  return nums
}

let bubbleSort2 = (nums) => {
  const len = nums.length
  let flag = false;

  do {
    flag = false
    for (let i = 0; i < len; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
        flag = true
      }
    }
  } while (flag);

  return nums

}

// @lc code=end

