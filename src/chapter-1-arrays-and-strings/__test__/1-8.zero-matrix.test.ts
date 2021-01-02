import { setZeros } from '../1-8.zero-matrix'

test('能正确的将元素置零', () => {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]

  expect(setZeros(matrix)).toEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
})
