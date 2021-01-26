export const longestIncreasingSequence = (
  people: [number, number][]
): number => {
  const getNextPeople = (i: number): number[] => {
    const result: number[] = []

    const [h, w] = people[i]
    for (let i = 0; i < people.length; ++i) {
      if (people[i][0] < h && people[i][1] < w) result.push(i)
    }

    return result
  }
  const memo: Map<string, number> = new Map()

  const core = (index: number): number => {
    const key = people[index].join(',')
    if (memo.has(key)) return memo.get(key)!

    let result = 1
    const next = getNextPeople(index)
    for (let i = 0; i < next.length; ++i) {
      result = Math.max(result, 1 + core(next[i]))
    }

    memo.set(key, result)
    return result
  }

  let result = 0

  for (let i = 0; i < people.length; ++i) {
    result = Math.max(core(i), result)
  }

  return result
}
