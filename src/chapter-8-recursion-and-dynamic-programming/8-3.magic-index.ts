export const findIndex = (nums: number[]): number => {
  let result = -1
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    const mid = low + ((high - low) >> 1)

    if (mid === nums[mid]) {
      result = mid
      break
    } else if (mid > nums[mid]) low = mid + 1
    else high = mid - 1
  }

  return result
}

export const findDupArrIndex = (nums: number[]): number => {
  const findIndex = (nums: number[], low: number, high: number): number => {
    if (low > high) return -1

    const mid = low + ((high - low) >> 1)
    if (mid === nums[mid]) {
      return mid
    }
    const leftIndex = Math.min(nums[mid], mid - 1)
    const left = findIndex(nums, low, leftIndex)

    if (left >= 0) return left

    const rightIndex = Math.max(nums[mid], mid + 1)
    const right = findIndex(nums, rightIndex, high)

    return right
  }

  return findIndex(nums, 0, nums.length - 1)
}
