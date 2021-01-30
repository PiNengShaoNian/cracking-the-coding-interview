import { findMatrix, getMaxMatrix } from '../17-24.max-submatrix'

test('能找出最大和的子矩阵', () => {
  const matrix = [
    [-1, -1, -1, -1],
    [-1, 1, 1, -1],
    [-1, 1, 1, -1],
    [-1, -1, -1, -1],
  ]

  expect(findMatrix(matrix)).toEqual([1, 1, 2, 2])
  expect(getMaxMatrix(matrix)).toEqual([1, 2, 1, 2])
})
