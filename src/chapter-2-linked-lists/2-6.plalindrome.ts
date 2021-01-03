import ListNode from '../model/ListNode'

export const isPlalindrome = <T>(head: ListNode<T>): boolean => {
  let result = true

  let slow: ListNode<T> = head
  let fast: ListNode<T> | null = head
  const stack: ListNode<T>[] = []
  while (fast.next) {
    fast = fast.next
    stack.push(slow)

    if (fast?.next) fast = fast.next
    else break

    slow = slow.next!
  }

  slow = slow.next!

  while (stack.length) {
    const node = stack.pop()!

    if (node.val !== slow.val) {
      result = false
      break
    }
    slow = slow.next!
  }

  return result
}
