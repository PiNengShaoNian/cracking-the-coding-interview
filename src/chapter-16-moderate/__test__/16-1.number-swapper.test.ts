import { swap } from '../16-1.number-swapper'

test('能正确地交换两个数字', () => {
  const ref = { a: 1, b: 2 }
  swap(ref)

  expect(ref.a).toBe(2)
  expect(ref.b).toBe(1)
})
