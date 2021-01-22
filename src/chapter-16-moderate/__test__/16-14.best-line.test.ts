import { getBestLine } from '../16-14.best-line'

test('能求出正确线段', () => {
  const points: number[][] = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
  ]

  expect(getBestLine(points)).toEqual([
    [0, 0],
    [4, 4],
  ])

  points.push([6, 8], [6, 8], [6, 8], [6, 8], [6, 8], [6, 8], [6, 8], [6, 8])

  expect(getBestLine(points)).toEqual([
    [0, 0],
    [6, 8],
  ])

  const points1 = [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 1],
  ]

  expect(getBestLine(points1)).toEqual([
    [1, 1],
    [3, 1],
  ])
})
