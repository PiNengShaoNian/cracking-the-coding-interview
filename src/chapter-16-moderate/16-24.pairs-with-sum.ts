export const getPairs = (sum: number, nums: number[]): [number, number][] => {
  const result: [number, number][] = []

  nums.sort((a, b) => a - b)

  let l = 0
  let r = nums.length - 1

  while (l < r) {
    const cand = nums[l] + nums[r]

    if (cand === sum) {
      result.push([nums[l], nums[r]])
      ++l
      --r
    } else if (cand < sum) {
      ++l
    } else --r
  }
  return result
}
