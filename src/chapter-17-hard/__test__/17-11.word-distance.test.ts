import { createFindClosestFunc } from '../17-11.word-distance'

test('能得到单词的最短距离', () => {
  const findClosest = createFindClosestFunc(
    `
      a b c d e f b d c
      `
  )

  expect(findClosest('a', 'c')).toBe(2)
  expect(findClosest('a', 'd')).toBe(3)
  expect(findClosest('d', 'c')).toBe(1)
})
