import ListNode from '../model/ListNode'

const hasCycle = <T>(
  head: ListNode<T>
): [true, ListNode<T>] | [false, null] => {
  let result: [true, ListNode<T>] | [false, null] = [false, null]

  let slow: ListNode<T> = head
  let fast: ListNode<T> | null = head

  while (fast) {
    fast = fast.next
    if (fast?.next) fast = fast.next
    else break

    if (fast === slow) {
      result = [true, fast]
      break
    }
    slow = slow.next!
  }

  return result
}

const cycleLength = <T>(node: ListNode<T>): number => {
  let result = 1

  let x = node.next!
  for (; x !== node; x = x.next!) ++result

  return result
}

export const cycleEnterPoint = <T>(head: ListNode<T>): ListNode<T> | null => {
  const [isCycle, firstMeet] = hasCycle(head)

  if (!isCycle) return null

  const len = cycleLength(firstMeet!)

  let slow: ListNode<T> = head
  let fast: ListNode<T> = head
  for (let i = 0; i < len; ++i) {
    fast = fast.next!
  }

  while (true) {
    if (slow === fast) return slow

    slow = slow.next!
    fast = fast.next!
  }
}
