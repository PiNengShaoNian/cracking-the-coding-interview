import { getPondSize } from '../16-19.pond-size'

test('能正确求出所有池塘面积', () => {
  const grid = [
    [0, 2, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
  ]

  expect(getPondSize(grid)).toEqual([2, 4, 1])
})
