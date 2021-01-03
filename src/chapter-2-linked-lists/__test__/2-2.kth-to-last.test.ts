import buildLinkedList from '../../util/buildLinkedList'
import { kthToLast } from '../2-2.kth-to-last'

test('能正确地求出倒数第k个节点', () => {
  const head = buildLinkedList([1, 2, 3, 4, 5])

  expect(kthToLast(head, 1).val).toBe(5)
  expect(kthToLast(head, 2).val).toBe(4)
  expect(kthToLast(head, 3).val).toBe(3)
  expect(kthToLast(head, 4).val).toBe(2)
  expect(kthToLast(head, 5).val).toBe(1)
})
