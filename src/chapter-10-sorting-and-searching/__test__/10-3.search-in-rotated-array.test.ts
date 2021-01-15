import { search } from '../10-3.search-in-rotated-array'

test('能找到旋转数组中的数字', () => {
  const arr1 = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
  expect(search(arr1, 5)).toBe(8)
  expect(search(arr1, 15)).toBe(0)
  expect(search(arr1, 14)).toBe(arr1.length - 1)
})
