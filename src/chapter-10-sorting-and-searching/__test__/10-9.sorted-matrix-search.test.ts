import { findElement } from '../10-9.sorted-matrix-search'

test('能找到矩阵中的数字', () => {
  const matrix = [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ]

  expect(findElement(matrix, 7)).toBeTruthy()
  expect(findElement(matrix, 5)).toBeFalsy()
  expect(findElement(matrix, 16)).toBeFalsy()
})
