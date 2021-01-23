export const getMaxSum = (nums: number[]): number => {
  let sum = 0
  let maxsum = 0

  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i]

    if (sum > maxsum) {
      maxsum = sum
    } else if (sum < 0) {
      sum = 0
    }
  }

  return maxsum
}
