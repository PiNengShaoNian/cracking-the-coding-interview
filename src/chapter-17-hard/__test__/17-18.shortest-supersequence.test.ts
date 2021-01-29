import { shortestSequence } from '../17-18.shortest-supersequence'

test('能找出包含子数组的最短序列', () => {
  const long = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7]

  const short = [1, 5, 9]

  expect(shortestSequence(long, short)).toEqual([7, 10])
})
