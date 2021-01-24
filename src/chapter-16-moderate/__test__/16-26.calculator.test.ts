import { calculate } from '../16-26.calculator'

test('能正确的计算出表达式', () => {
  expect(calculate('2 * 3 + 5 / 6 * 3 + 15')).toBe(23.5)
  expect(calculate('3 * 3')).toBe(9)
  expect(calculate('3 - 3')).toBe(0)
  expect(calculate('3 / 3')).toBe(1)
  expect(calculate('3 - 3 / 3')).toBe(2)
})
