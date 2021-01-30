import { findSquare, findSquare1 } from '../17-23.max-black-square'

test('能找到最大的黑方', () => {
  const matrix = [
    [1, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ]

  expect(findSquare(matrix)).toEqual([1, 0, 2])
  expect(findSquare1(matrix)).toEqual([1, 0, 2])
})
