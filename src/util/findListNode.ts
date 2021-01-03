import ListNode from '../model/ListNode'

export const findListNodeByVal = <T>(
  head: ListNode<T>,
  val: T
): null | ListNode<T> => {
  for (let x: null | ListNode<T> = head; x; x = x.next) {
    if (x.val === val) return x
  }

  return null
}
