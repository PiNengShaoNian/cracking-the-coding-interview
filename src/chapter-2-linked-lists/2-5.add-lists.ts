import ListNode from '../model/ListNode'
import { reverseList } from '../util/reverseList'

export const add = (
  head1: ListNode<number>,
  head2: ListNode<number>
): number => {
  let result = 0
  head1 = reverseList(head1)
  head2 = reverseList(head2)

  let p1: ListNode<number> | null = head1
  let p2: ListNode<number> | null = head2

  let takeOver = 0
  let n = 0
  while (p1 || p2) {
    let sum = (p1?.val ?? 0) + (p2?.val ?? 0) + takeOver

    if (sum >= 10) {
      takeOver = 1
      sum %= 10
    } else takeOver = 0

    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    result += 10 ** n * sum
    ++n
  }

  if (takeOver) result += 10 ** n

  return result
}
