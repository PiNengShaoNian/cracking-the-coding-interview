import ListNode from '../model/ListNode'

export const kthToLast = <T>(head: ListNode<T>, k: number): ListNode<T> => {
  let slow: ListNode<T> | null = head
  let fast: ListNode<T> | null = head

  for (let i = 0; i < k; ++i) {
    fast = fast!.next
  }

  while (fast) {
    fast = fast.next
    slow = slow!.next
  }

  return slow!
}
