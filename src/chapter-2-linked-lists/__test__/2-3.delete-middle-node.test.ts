import buildLinkedList from '../../util/buildLinkedList'
import { findListNodeByVal } from '../../util/findListNode'
import { deleteNode } from '../2-3.delete-middle-node'

test('删除节点', () => {
  const list = buildLinkedList([1, 2, 3, 4, 5])

  const node3 = findListNodeByVal(list, 3)!
  expect(node3.val).toBe(3)
  deleteNode(node3)
  expect([...list]).toEqual([1, 2, 4, 5])

  const node2 = findListNodeByVal(list, 2)!
  expect(node2.val).toBe(2)
  deleteNode(node2)
  expect([...list]).toEqual([1, 4, 5])


  const node4 = findListNodeByVal(list, 4)!
  expect(node4.val).toBe(4)
  deleteNode(node4)
  expect([...list]).toEqual([1, 5])
})
                      