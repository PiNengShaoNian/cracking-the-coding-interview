import { countingSort } from '../util/countingSort'

export const hash = (str: string, size: number): number => {
  let result = 0
  for (let i = 0; i < str.length; ++i) {
    result += str.charCodeAt(i)
  }

  return (result * str.length) % size
}

export const groupAnagrams = (strs: string[]): void => {
  countingSort(0, strs.length * 4, strs, (s) => hash(s, strs.length * 4))
}
