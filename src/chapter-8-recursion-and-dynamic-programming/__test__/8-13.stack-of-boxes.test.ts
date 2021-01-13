import { maxHeight } from '../8-13.stack-of-boxes'

test('能求出堆积的最大高度', () => {
  const boxes1: [wight: number, height: number, depth: number][] = [
    [5, 5, 5],
    [4, 4, 4],
    [3, 3, 3],
  ]

  const boxes2: [wight: number, height: number, depth: number][] = [
    [5, 5, 5],
    [4, 4, 6],
    [3, 3, 3],
  ]

  expect(maxHeight(boxes2)).toBe(8)
})
