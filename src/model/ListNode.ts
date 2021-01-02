export default class ListNode<T> {
  constructor(public val: T, public next: ListNode<T> | null) {}

  *[Symbol.iterator]() {
    for (let x: null | ListNode<T> = this; x; x = x.next) {
      yield x.val
    }
  }
}
