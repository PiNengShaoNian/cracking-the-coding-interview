import ListNode from '../model/ListNode'

export const deleteNode = <T>(node: ListNode<T>): void => {
  if (!node.next) throw new Error('Invalid node')

  node.val = node.next.val
  node.next = node.next.next
}
