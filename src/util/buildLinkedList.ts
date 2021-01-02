import ListNode from '../model/ListNode'

export default function buildLinkedList<T>(arr: T[]) {
  let head: ListNode<T>
  let cur: ListNode<T> = (head = new ListNode(arr[0], null))

  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i], null)
    cur = cur.next
  }

  return head
}
