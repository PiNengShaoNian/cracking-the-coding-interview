import { countFactZeros, countFactZeros1 } from '../16-5.factorial-zeros'

test('能正确的计算出尾随零', () => {
  expect(countFactZeros1(666)).toBe(countFactZeros(666))
  expect(countFactZeros1(223)).toBe(countFactZeros(223))
})
