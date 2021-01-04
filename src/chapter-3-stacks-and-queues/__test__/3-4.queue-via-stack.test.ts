import { Queue } from '../3-4.queue-via-stack'

test('Queue正常工作', () => {
  const queue = new Queue()

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)

  expect(queue.size()).toBe(4)

  expect(queue.dequeue()).toBe(1)
  expect(queue.front()).toBe(2)
  expect(queue.dequeue()).toBe(2)
  expect(queue.front()).toBe(3)
  expect(queue.dequeue()).toBe(3)
  expect(queue.dequeue()).toBe(4)
})
