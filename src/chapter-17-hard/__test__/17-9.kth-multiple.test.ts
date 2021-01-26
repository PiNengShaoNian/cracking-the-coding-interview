import { getKthMagicNumber } from '../17-9.kth-multiple'

test('能获得正确的第k个数', () => {
  expect(getKthMagicNumber(1)).toBe(1)
  expect(getKthMagicNumber(2)).toBe(3)
  expect(getKthMagicNumber(3)).toBe(5)
  expect(getKthMagicNumber(4)).toBe(7)
  expect(getKthMagicNumber(5)).toBe(9)
  expect(getKthMagicNumber(6)).toBe(15)
  expect(getKthMagicNumber(7)).toBe(21)
})
