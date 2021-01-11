import { findPath } from '../8-2.robot-in-a-grid'

test('能找到正确路径', () => {
  const grid: (0 | 1)[][] = [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 1],
  ]

  expect(findPath(grid)).toEqual([
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
})
