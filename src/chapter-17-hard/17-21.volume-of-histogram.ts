const getMaxHeight = (start: number, histogram: number[]): number => {
  let maxHeight = -Infinity
  let maxIndex = -1
  for (let i = start; i < histogram.length; ++i) {
    if (histogram[i] > maxHeight) {
      maxHeight = histogram[i]
      maxIndex = i
    }
  }
  return maxIndex
}

export const volumeOfHistogram = (histogram: number[]): number => {
  //memo[n] 在(n,histogram.length)区间中最大那个高度的index
  const memo: number[] = []

  for (let i = 0; i < histogram.length; ++i) {
    const prev = memo[i - 1]
    if (prev === undefined || prev <= i) {
      memo[i] = getMaxHeight(i + 1, histogram)
    } else memo[i] = prev
  }

  let prev = -1
  let index = 0
  let result = 0

  while (index < histogram.length) {
    const cur = histogram[index]
    if (cur >= prev) {
      result += (memo[index] - index) * Math.min(cur, histogram[memo[index]])
      ++index
      prev = cur
    } else {
      result += (memo[index] - index) * Math.min(cur, histogram[memo[index]])
      index = memo[index] + 1
      prev = histogram[memo[index]]
    }
  }

  return result
}
