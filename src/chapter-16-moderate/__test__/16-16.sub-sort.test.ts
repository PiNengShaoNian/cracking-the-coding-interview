import { minSortingSequence, minSortingSequence1 } from '../16-16.sub-sort'

test('能正确求出待排序的最小区间', () => {
  expect(
    minSortingSequence([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])
  ).toEqual([3, 9])
  expect(
    minSortingSequence1([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])
  ).toEqual([3, 9])

  expect(
    minSortingSequence1([1, 2, 4, 6, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])
  ).toEqual([4, 10])

  expect(minSortingSequence1([1, 2, 19, 4, 5, 20])).toEqual([2, 4])
})
