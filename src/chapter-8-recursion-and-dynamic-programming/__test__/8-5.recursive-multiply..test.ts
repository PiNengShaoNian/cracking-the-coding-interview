import {
  minProduct1,
  minProduct2,
  minProduct3,
} from '../8-5.recursive-multiply'

test('能正确的计算出乘积', () => {
  expect(minProduct1(99, 99)).toBe(99 * 99)
  expect(minProduct1(99, 97)).toBe(99 * 97)
  expect(minProduct1(98, 98)).toBe(98 * 98)

  expect(minProduct2(99, 99)).toBe(99 * 99)
  expect(minProduct2(99, 97)).toBe(99 * 97)
  expect(minProduct2(98, 98)).toBe(98 * 98)

  expect(minProduct3(99, 99)).toBe(99 * 99)
  expect(minProduct3(99, 97)).toBe(99 * 97)
  expect(minProduct3(98, 98)).toBe(98 * 98)
})
