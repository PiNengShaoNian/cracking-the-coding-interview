export const minSortingSequence = (nums: number[]): [number, number] => {
  const result: [number, number] = [0, 0]

  flag: for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[j] < nums[i]) {
        result[0] = i
        break flag
      }
    }
  }

  flag: for (let i = nums.length - 1; i >= 0; --i) {
    for (let j = i - 1; j >= 0; --j) {
      if (nums[j] > nums[i]) {
        result[1] = i
        break flag
      }
    }
  }

  return result
}

export const minSortingSequence1 = (nums: number[]): [number, number] => {
  let min = 0
  let max = nums.length - 1

  for (let i = 0; i + 1 < nums.length; ++i) {
    if (nums[i] <= nums[i + 1]) ++min
    else break
  }

  for (let i = nums.length - 1; i - 1 >= 0; --i) {
    if (nums[i] >= nums[i - 1]) --max
    else break
  }

  if (min >= max) return [-1, -1]

  let minValue = Infinity
  let maxValue = -Infinity
  for (let i = min + 1; i < max; ++i) {
    if (nums[i] > maxValue) maxValue = nums[i]
    if (nums[i] < minValue) minValue = nums[i]
  }

  for (let i = max; i + 1 < nums.length; ++i) {
    if (nums[i + 1] < maxValue) {
      ++max
      if (nums[i] < minValue) minValue = nums[i]
    } else break
  }

  for (let i = min; i - 1 >= 0; --i) {
    if (nums[i - 1] > minValue) {
      --min
    } else break
  }

  return [min, max]
}
