import { swap } from '../16-21.sum-swap'

test('能正确的求出要交换的数字', () => {
  expect(swap([4, 1, 2, 1, 1, 2], [3, 6, 3, 3])).toEqual([1, 3])
  expect(swap([2, 0], [10, 8])).toEqual([0, 8])
})
