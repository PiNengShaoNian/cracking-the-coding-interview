import { longestIncreasingSequence } from '../17-8.circus-tower'

test('能求出最长的递增序列', () => {
  expect(
    longestIncreasingSequence([
      [65, 100],
      [70, 150],
      [56, 90],
      [75, 190],
      [60, 95],
      [68, 110],
    ])
  ).toBe(6)

  expect(
    longestIncreasingSequence([
      [1, 1],
      [2, 2],
      [3, 3],
      [2, 1],
    ])
  ).toBe(3)
})
