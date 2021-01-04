import { Stack } from '../3-2.stack-min'

test('Stack-Min工作正常', () => {
  const stack1 = new Stack()

  stack1.push(1)
  stack1.push(2)
  stack1.push(3)

  expect(stack1.min()).toBe(1)
  stack1.pop()
  expect(stack1.min()).toBe(1)
  stack1.pop()
  expect(stack1.min()).toBe(1)

  const stack2 = new Stack()
  stack2.push(3)
  stack2.push(2)
  stack2.push(1)

  expect(stack2.min()).toBe(1)

  stack2.pop()
  expect(stack2.min()).toBe(2)
  
  stack2.pop()
  expect(stack2.min()).toBe(3)
})
