export const getPowerSet = <T>(set: T[]): T[][] => {
  const result: T[][] = []
  const getSubsets = (i: number, set: T[], sub: T[]) => {
    if (i === set.length) {
      result.push([...sub])
      return
    }

    sub.push(set[i])
    getSubsets(i + 1, set, sub)

    sub.pop()
    getSubsets(i + 1, set, sub)
  }

  getSubsets(0, set, [])
  return result
}

export const getSubsets = <T>(set: T[], index: number): T[][] => {
  let allsets: T[][]

  if (index === set.length) allsets = [[]]
  else {
    allsets = getSubsets(set, index + 1)
    const item = set[index]
    const moreSubsets: T[][] = []
    for (const s of allsets) {
      const newSet: T[] = []
      newSet.push(...s)
      newSet.push(item)
      moreSubsets.push(newSet)
    }
    allsets.push(...moreSubsets)
  }

  return allsets
}
