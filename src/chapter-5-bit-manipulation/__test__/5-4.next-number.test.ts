import { getNext } from '../5-4.next-number'

test('能正确地获取到下一个数', () => {
  expect(getNext(0b11011001111100)).toBe(0b11011010001111)
})
