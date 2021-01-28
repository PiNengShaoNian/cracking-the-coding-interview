export const smallestK = (k: number, nums: number[]): number[] => {
  const exch = (i: number, j: number, arr: any[]): void => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  const partition = (nums: number[], lo: number, hi: number): number => {
    if (lo >= hi) return lo

    const v = nums[lo]
    let i = lo
    let j = hi + 1

    while (i < j) {
      while (nums[++i] < v) if (i >= hi) break
      while (nums[--j] > v) if (j <= lo) break

      if (i >= j) break

      exch(i, j, nums)
    }

    exch(j, lo, nums)
    return j
  }

  let lo = 0
  let hi = nums.length - 1
  while (lo <= hi) {
    const mid = partition(nums, lo, hi)

    if (mid === k) break
    else if (mid > k) {
      hi = mid - 1
    } else lo = mid + 1
  }

  return nums.slice(0, k)
}
