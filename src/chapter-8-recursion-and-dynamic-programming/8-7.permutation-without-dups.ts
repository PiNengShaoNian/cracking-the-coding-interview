export const permutation = (s: string): string[] => {
  const used: boolean[] = []
  const result: string[] = []
  const permutationHelper = (
    s: string,
    cur: string[],
    used: boolean[],
    result: string[]
  ) => {
    if (cur.length === s.length) {
      result.push(cur.join(''))
      return
    }

    for (let i = 0; i < s.length; ++i) {
      if (!used[i]) {
        cur.push(s[i])
        used[i] = true
        permutationHelper(s, cur, used, result)
        used[i] = false
        cur.pop()
      }
    }
  }

  permutationHelper(s, [], used, result)

  return result
}

const insertCharAt = (str: string, char: string, i: number): string => {
  const start = str.slice(0, i)
  const end = str.slice(i)

  return start + char + end
}
export const permutation1 = (str: string): string[] => {
  if (!str) return ['']

  const result: string[] = []
  const remainder = str.slice(1)
  const words = permutation1(remainder)

  for (const word of words) {
    for (let i = 0; i <= word.length; ++i) {
      result.push(insertCharAt(word, str[0], i))
    }
  }

  return result
}

export const permutation3 = (str: string): string[] => {
  if (!str) return ['']
  const result: string[] = []

  const permutationHelper = (
    perfix: string,
    remainder: string,
    result: string[]
  ): void => {
    if (!remainder) {
      result.push(perfix)
      return
    }

    for (let i = 0; i < remainder.length; ++i) {
      const before = remainder.slice(0, i)
      const after = remainder.slice(i + 1)

      permutationHelper(perfix + remainder[i], before + after, result)
    }
  }

  permutationHelper('', str, result)

  return result
}
