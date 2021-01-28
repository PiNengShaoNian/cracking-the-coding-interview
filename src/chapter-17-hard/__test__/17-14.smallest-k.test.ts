import { smallestK } from '../17-14.smallest-k'

test('能找出最小的k个数', () => {
  const arr = [666, 223, 1, 3, 5, 2]

  expect(smallestK(4, arr)).toEqual([1, 2, 5, 3])
})
