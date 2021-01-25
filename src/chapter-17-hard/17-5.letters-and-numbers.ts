const computeDeltas = (arr: (0 | 1)[]): number[] => {
  const result: number[] = []
  let zeros = 0
  let ones = 0

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === 0) ++zeros
    else ++ones

    result[i] = ones - zeros
  }

  return result
}

export const findLongestMatch = (arr: (0 | 1)[]): (0 | 1)[] => {
  const deltas = computeDeltas(arr)
  const map: Map<number, number> = new Map()
  map.set(0, -1)
  const max: [number, number] = [0, 0]

  for (let i = 0; i < deltas.length; ++i) {
    if (!map.has(deltas[i])) {
      map.set(deltas[i], i)
    } else {
      const match = map.get(deltas[i])!
      const distance = i - match

      if (distance > max[1] - max[0]) {
        max[1] = i
        max[0] = match
      }
    }
  }

  const result: (0 | 1)[] = []

  for (let i = max[0] + 1; i <= max[1]; ++i) {
    result.push(arr[i])
  }

  return result
}
