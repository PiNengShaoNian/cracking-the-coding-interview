import { MultiStack } from '../3-1.multi-stack'

test('MultiStack工作正常', () => {
  const stack = new MultiStack(3, 5)

  stack.push(0, 0)
  stack.push(0, 1)
  stack.push(0, 2)
  stack.push(0, 3)
  stack.push(0, 4)
  expect(stack.numberOfElements()).toBe(5)
  stack.push(0, 5)
  expect(stack.numberOfElements()).toBe(6)
  expect(stack.peek(0)).toBe(5)
  stack.push(0, 6)
  expect(stack.peek(0)).toBe(6)
  stack.pop(0)
  stack.pop(0)
  stack.peek(0)
  stack.push(0, 5)
  stack.push(0, 6)
  stack.push(0, 7)

  expect(stack.getStackValues(0)).toHaveLength(8)
  expect(stack.getStackValues(0)).toEqual([0, 1, 2, 3, 4, 5, 6, 7])

  stack.push(2, 10)
  stack.push(2, 11)
  stack.push(2, 12)
  stack.push(2, 13)
  stack.push(2, 14)
  stack.push(2, 15)

  expect(stack.getStackValues(2)).toHaveLength(6)

  stack.push(1, 8)

  expect(stack.peek(1)).toBe(8)

  expect(() => {
    stack.push(1, 9)
  }).toThrow()
})
