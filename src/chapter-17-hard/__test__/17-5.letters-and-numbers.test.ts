import { findLongestMatch } from '../17-5.letters-and-numbers'

test('能找出最大串', () => {
  const arr: (0 | 1)[] = [1, 0, 0, 1, 1, 1]
  const arr2: (0 | 1)[] = [1, 1, 1, 0, 0]

  expect(findLongestMatch(arr)).toEqual([1, 0, 0, 1])
  expect(findLongestMatch(arr2)).toEqual([1, 1, 0, 0])
})
