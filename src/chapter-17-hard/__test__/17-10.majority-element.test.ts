import { majorityElement } from '../17-10.majority-element'

test('能获得正确的主要元素', () => {
  expect(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5])).toBe(5)
  expect(majorityElement([1, 2, 9, 5, 9, 5, 5])).toBe(-1)
})
