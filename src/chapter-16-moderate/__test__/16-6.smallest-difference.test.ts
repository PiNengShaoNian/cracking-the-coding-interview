import { getSmallestDifference } from '../16-6.smallest-difference'

test('能算出最小差', () => {
  expect(getSmallestDifference([1, 2, 11, 15], [4, 12, 19, 23, 127, 235])).toBe(
    1
  )

  expect(getSmallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])).toBe(
    3
  )
})
