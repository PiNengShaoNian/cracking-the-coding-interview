import { insertion, insertion1 } from '../5-1.insertion'

test('能正确的插入数字', () => {
  expect(insertion(0b10011, 0b10000000000, 2, 6)).toBe(0b10001001100)
  expect(insertion1(0b10011, 0b10000000000, 2, 6)).toBe(0b10001001100)
})
