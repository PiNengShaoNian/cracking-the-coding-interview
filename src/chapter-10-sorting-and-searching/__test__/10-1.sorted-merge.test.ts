import { merge } from '../10-1.sorted-merge'

test('能合并两个排序数组', () => {
  const arr1 = [1, 3, 5, 7, 9]
  const arr2 = [2, 4, 6, 8, 10]
  merge(arr1, arr2)
  expect(arr1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})
