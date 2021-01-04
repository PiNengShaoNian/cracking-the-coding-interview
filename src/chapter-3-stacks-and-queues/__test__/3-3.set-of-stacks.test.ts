import { SetOfStacks } from '../3-3.set-of-stacks'

test('SetOfStacks正常工作', () => {
  const stack = new SetOfStacks(3)

  for (let i = 0; i < 100; ++i) {
    stack.push(i)
  }

  while (!stack.isEmpty()) {
    const value = stack.peek()
    expect(stack.pop()).toBe(value)
  }
})
