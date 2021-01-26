const smallestK = (arr: number[], k: number): void => {
  let low = 0
  let hi = arr.length - 1

  const swap = (arr: any[], i: number, j: number) => {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }

  const partition = (arr: number[], low: number, hi: number): number => {
    let i = low
    let j = hi + 1

    const v = arr[low]

    while (true) {
      while (arr[++i] < v) {
        if (i >= hi) break
      }

      while (arr[--j] > v) {
        if (j <= low) break
      }

      if (i >= j) break

      swap(arr, i, j)
    }

    swap(arr, low, j)

    return j
  }

  while (low <= hi) {
    const p = partition(arr, low, hi)

    if (p > k) {
      hi = p - 1
    } else if (p < k) {
      low = p + 1
    } else break
  }
}

const moreThanHalf = (num: number, nums: number[]): boolean => {
  const mid = nums.length % 2 === 0 ? nums.length >> 1 : (nums.length >> 1) + 1
  let count = 0

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === num) ++count
  }

  return count >= mid
}

export const majorityElement = (nums: number[]): number => {
  const mid = nums.length >> 1
  smallestK(nums, mid)

  if (moreThanHalf(nums[mid], nums)) return nums[mid]
  else return -1
}
