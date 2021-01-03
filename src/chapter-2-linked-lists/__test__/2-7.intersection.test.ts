import buildLinkedList from '../../util/buildLinkedList'
import { findListNodeByVal } from '../../util/findListNode'
import { intersectionPoint } from '../2-7.intersection'

test('能正确地找出相交点', () => {
  const common = buildLinkedList([6, 66, 666])
  const head1 = buildLinkedList([1, 2, 3])
  const head2 = buildLinkedList([7, 8, 9])

  const node3 = findListNodeByVal(head1, 3)!
  const node9 = findListNodeByVal(head2, 9)!

  node3.next = common
  node9.next = common

  expect(intersectionPoint(head1, head2)?.val).toBe(6)

  const head3 = buildLinkedList([1, 2, 3])
  const head4 = buildLinkedList([1, 2, 3])

  expect(intersectionPoint(head3, head4)).toBeNull()
})
