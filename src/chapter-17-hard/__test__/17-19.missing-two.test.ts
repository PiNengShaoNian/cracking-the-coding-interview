import { missingOne, missingTwo } from '../17-19.missing-two'

test('能找出缺失的数字', () => {
  const missing8 = [1, 2, 3, 4, 5, 6, 7, 9, 10]
  const missing1 = [2, 3, 4, 5, 6]

  expect(missingOne(missing8)).toBe(8)
  expect(missingOne(missing1)).toBe(1)

  const missing6_8 = [1, 2, 3, 4, 5, 7, 9, 10]
  const missing1_2 = [3, 4, 5, 6, 7, 8]

  expect(missingTwo(missing1_2)).toEqual([1, 2])
  expect(missingTwo(missing6_8)).toEqual([6, 8])
})
