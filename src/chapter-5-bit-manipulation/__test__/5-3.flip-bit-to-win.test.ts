import { filpToWin, flipBit, longestSequece } from '../5-3.flip-bit-to-win'

test('能求出最长序列', () => {
  expect(filpToWin(1775)).toBe(8)
  expect(flipBit(1775)).toBe(8)
  expect(longestSequece(1775)).toBe(8)
})
