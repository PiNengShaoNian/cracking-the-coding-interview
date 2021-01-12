import { findDupArrIndex, findIndex } from '../8-3.magic-index'

test('能找到一个magic index', () => {
  expect(findIndex([1, 2, 3])).toBe(-1)
  expect(findIndex([-1, 0, 1, 2, 3, 4, 6])).toBe(6)
  expect(findIndex([0, 2, 3, 4, 5, 5.5, 7])).toBe(0)

  expect(findDupArrIndex([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13])).toBe(2)
})
