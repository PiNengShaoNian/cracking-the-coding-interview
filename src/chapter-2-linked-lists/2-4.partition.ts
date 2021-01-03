import ListNode from '../model/ListNode'

export const partition = (
  head: ListNode<number>,
  x: number
): ListNode<number> | null => {
  let newHead: ListNode<number> | null = null
  let newTail: ListNode<number> | null = null

  let cur: ListNode<number> | null = head
  
  while (cur) {
    const temp: ListNode<number> | null = cur.next
    cur.next = null
    if (cur.val < x) {
      if (!newHead) {
        newHead = newTail = cur
      } else {
        cur.next = newHead
        newHead = cur
      }
    } else {
      if (!newTail) {
        newHead = newTail = cur
      } else {
        newTail.next = cur
        newTail = cur
      }
    }

    cur = temp
  }

  return newHead
}
