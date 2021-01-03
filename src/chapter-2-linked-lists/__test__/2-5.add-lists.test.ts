import buildLinkedList from '../../util/buildLinkedList'
import { add } from '../2-5.add-lists'

test('能正确地将链表相加', () => {
  const head1 = buildLinkedList([9, 9, 9])
  const head2 = buildLinkedList([9, 9])

  expect(add(head1, head2)).toBe(999 + 99)

  const head3 = buildLinkedList([2, 2, 3])
  const head4 = buildLinkedList([6, 6, 6, 9])

  expect(add(head3, head4)).toBe(223 + 6669)
})
