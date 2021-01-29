export const shortestSequence = (
  long: number[],
  short: number[]
): [number, number] => {
  const result: [number, number] = [0, long.length]

  let l = 0
  let r = -1
  const subSeqMap: Map<number, boolean> = new Map()

  for (let i = 0; i < short.length; ++i) {
    subSeqMap.set(short[i], false)
  }

  let containsCount = 0
  while (l < long.length) {
    if (r + 1 < long.length && containsCount < short.length) {
      if (subSeqMap.has(long[++r]) && subSeqMap.get(long[r]) === false) {
        subSeqMap.set(long[r], true)
        ++containsCount
      }
    } else {
      if (subSeqMap.has(long[l])) {
        subSeqMap.set(long[l], false)
        --containsCount
      }
      ++l
    }

    if (containsCount === short.length && r - l < result[1] - result[0]) {
      result[0] = l
      result[1] = r
    }
  }

  return result
}
