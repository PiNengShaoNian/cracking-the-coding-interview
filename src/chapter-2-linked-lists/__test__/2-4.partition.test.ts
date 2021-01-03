import buildLinkedList from '../../util/buildLinkedList'
import { partition } from '../2-4.partition'

test('能正确地分割链表', () => {
  const testArr = [2, 34, 23, 32, 2, 1, 2, 5, 3, 5, 2, 9, 66, 4]
  const head = buildLinkedList(testArr)

  const newHead = partition(head, 5)!

  const arr = [...newHead]
  expect(arr.length).toBe(testArr.length)

  const index = arr.findIndex((v) => v >= 5)

  expect(index).toBeGreaterThanOrEqual(0)

  for (let i = 0; i < index; ++i) {
    expect(arr[i]).toBeLessThan(5)
  }

  for (let i = 0; i < index; ++i) {
    expect(arr[i]).toBeLessThan(5)
  }

  for (let i = index; i < testArr.length; ++i) {
    expect(arr[i]).toBeGreaterThanOrEqual(5)
  }
})
