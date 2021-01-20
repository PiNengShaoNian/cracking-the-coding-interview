import { getChineseInt } from '../16-8.chinese-int'

test('能获得正确的数字', () => {
  expect(getChineseInt(9)).toBe('九')
  expect(getChineseInt(99)).toBe('九十九')
  expect(getChineseInt(999)).toBe('九百九十九')
  expect(getChineseInt(9999)).toBe('九千九百九十九')
  expect(getChineseInt(99999)).toBe('九万九千九百九十九')
  expect(getChineseInt(999999)).toBe('九十九万九千九百九十九')
  expect(getChineseInt(9999999)).toBe('九百九十九万九千九百九十九')
  expect(getChineseInt(99999999)).toBe('九千九百九十九万九千九百九十九')
  expect(getChineseInt(999999999)).toBe('九亿九千九百九十九万九千九百九十九')
  expect(getChineseInt(666)).toBe('六百六十六')
})
