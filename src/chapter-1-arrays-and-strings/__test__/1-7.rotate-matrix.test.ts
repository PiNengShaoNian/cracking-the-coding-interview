import { rotateMatrix } from '../1-7.rotate-matrix'

test('能正确的旋转矩阵', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  expect(rotateMatrix(matrix)).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ])
})
