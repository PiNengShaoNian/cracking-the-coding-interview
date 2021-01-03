import ListNode from '../model/ListNode'

export const intersectionPoint = <T>(
  head1: ListNode<T>,
  head2: ListNode<T>
): ListNode<T> | null => {
  let result: ListNode<T> | null = null
  const stack1: ListNode<T>[] = []
  const stack2: ListNode<T>[] = []

  for (let x: ListNode<T> | null = head1; x; x = x.next) {
    stack1.push(x)
  }

  for (let x: ListNode<T> | null = head2; x; x = x.next) {
    stack2.push(x)
  }

  while (stack1.length && stack2.length) {
    const node1 = stack1.pop()!
    const node2 = stack2.pop()!

    if (node2 === node1) {
      result = node1
    } else break
  }

  return result
}
