export const hash = (str: string, size: number): number => {
  let result = 0
  for (let i = 0; i < str.length; ++i) {
    result += str.charCodeAt(i)
  }

  return (result * str.length) % size
}

const countingSort = <T>(
  l: number,
  r: number,
  elems: T[],
  getId: (e: T) => number
): T[] => {
  const cnt = Array.from({ length: r - l + 1 }, () => 0)
  const result: T[] = []

  for (let i = 0; i < elems.length; ++i) {
    cnt[getId(elems[i])]++
  }

  const index = Array.from({ length: cnt.length + 1 }, () => 0)

  for (let i = 0; i < index.length - 1; ++i) {
    index[i + 1] = index[i] + cnt[i]
  }

  for (let i = 0; i < elems.length; ++i) {
    result[index[getId(elems[i])]++] = elems[i]
  }

  elems.length = 0
  for (let i = 0; i < result.length; ++i) {
    elems.push(result[i])
  }

  return elems
}

export const groupAnagrams = (strs: string[]): void => {
  countingSort(0, strs.length * 4, strs, (s) => hash(s, strs.length * 4))
}
