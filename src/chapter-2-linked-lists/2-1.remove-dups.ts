import ListNode from '../model/ListNode'

export const removeDuplicates = <T>(head: ListNode<T>): void => {
  const set = new Set<T>()

  const dummyHead = new ListNode<T>(null as any, null)
  let prev = dummyHead
  let cur: ListNode<T> | null = head
  while (cur) {
    if (!set.has(cur.val)) {
      set.add(cur.val)
      prev.next = cur
      prev = cur
    }
    
    const temp: ListNode<T> | null = cur.next
    cur.next = null
    cur = temp
  }
}
