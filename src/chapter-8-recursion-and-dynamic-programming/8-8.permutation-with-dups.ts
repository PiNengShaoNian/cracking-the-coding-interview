export const permutation = (s: string): string[] => {
  const result: string[] = []

  const buildFreTable = (str: string): Map<string, number> => {
    const map: Map<string, number> = new Map()
    for (let i = 0; i < str.length; ++i) {
      if (!map.has(str[i])) map.set(str[i], 1)
      else map.set(str[i], map.get(str[i])! + 1)
    }

    return map
  }

  const permutationHelper = (
    prefix: string,
    remaining: number,
    map: Map<string, number>
  ): void => {
    if (remaining === 0) {
      result.push(prefix)
      return
    }

    for (const key of map.keys()) {
      const count = map.get(key)!

      if (count > 0) {
        map.set(key, count - 1)
        permutationHelper(prefix + key, remaining - 1, map)
        map.set(key, count)
      }
    }
  }

  permutationHelper('', s.length, buildFreTable(s))

  return result
}
