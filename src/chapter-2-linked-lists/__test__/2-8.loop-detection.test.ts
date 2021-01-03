import buildLinkedList from '../../util/buildLinkedList'
import { findListNodeByVal } from '../../util/findListNode'
import { cycleEnterPoint } from '../2-8.loop-detection'

test('能找到环的入口', () => {
  const head = buildLinkedList(['a', 'b', 'c', 'd', 'e'])

  const nodeE = findListNodeByVal(head, 'e')!
  const nodeC = findListNodeByVal(head, 'c')!

  nodeE.next = nodeC

  expect(cycleEnterPoint(head)?.val).toBe('c')

  const head2 = buildLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

  const node12 = findListNodeByVal(head2, 12)!
  const node7 = findListNodeByVal(head2, 7)!

  node12.next = node7

  expect(cycleEnterPoint(head2)?.val).toBe(7)
})
