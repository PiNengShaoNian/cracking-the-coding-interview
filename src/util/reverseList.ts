import ListNode from '../model/ListNode'

export const reverseList = <T>(head: ListNode<T>): ListNode<T> => {
  let prev: ListNode<T> | null = null
  let cur: ListNode<T> | null = head

  while (cur) {
    const next: ListNode<T> | null = cur.next

    cur.next = prev
    prev = cur
    cur = next
  }

  return prev!
}
