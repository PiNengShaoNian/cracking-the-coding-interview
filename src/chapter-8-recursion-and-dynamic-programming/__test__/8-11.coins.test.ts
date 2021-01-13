import { getConinsCombination } from '../8-11.coins'

test('能得到硬币的正确组合', () => {
  expect(getConinsCombination(3)).toBe(1)
  expect(getConinsCombination(5)).toBe(2)
  expect(getConinsCombination(6)).toBe(2)

  // 5 + 5, 10 * 1, 10, 5 * 1 + 5
  expect(getConinsCombination(10)).toBe(4)
})
