import { sortStack } from '../3-5.sort-stack'

test('能正确的排序栈', () => {
  expect(sortStack([5, 1, 2, 4, 3])).toEqual([1, 2, 3, 4, 5])
})
