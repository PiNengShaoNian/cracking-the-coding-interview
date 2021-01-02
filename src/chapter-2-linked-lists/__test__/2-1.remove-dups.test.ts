import buildLinkedList from '../../util/buildLinkedList'
import { removeDuplicates } from '../2-1.remove-dups'

test('能正确的删除链表中的重复元素', () => {
  const head = buildLinkedList([1, 2, 3, 1, 2, 3])

  removeDuplicates(head)

  expect([...head]).toEqual([1, 2, 3])
})
