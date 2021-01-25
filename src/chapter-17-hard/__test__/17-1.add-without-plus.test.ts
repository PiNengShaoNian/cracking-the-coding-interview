import { add } from '../17-1.add-without-plus'

test('能正确的相加两个数', () => {
  expect(add(3, 4)).toBe(3 + 4)
  expect(add(3, -4)).toBe(3 - 4)
})
