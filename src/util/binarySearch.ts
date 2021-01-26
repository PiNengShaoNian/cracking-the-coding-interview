export const lowerBound = (nums: number[], target: number): number => {
  if (!nums.length) return -1

  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (nums[mid] === target) {
      if (mid - 1 >= 0 && nums[mid - 1] === target) {
        hi = mid - 1
      } else {
        lo = mid
        break
      }
    } else if (nums[mid] > target) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  return lo
}

export const upperBound = (nums: number[], target: number): number => {
  if (!nums.length) return -1

  let lo = 0
  let hi = nums.length - 1

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2)
    if (nums[mid] === target) {
      if (mid + 1 < nums.length && nums[mid + 1] === target) {
        lo = mid + 1
      } else {
        lo = mid + 1
        break
      }
    } else if (nums[mid] > target) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }

  return lo
}
