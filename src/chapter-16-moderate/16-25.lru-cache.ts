class ListNode<Value> {
  prev: ListNode<Value> | null = null
  next: ListNode<Value> | null = null

  constructor(public key: number, public value: Value) {}
}

export class Cache<Value> {
  private map: Map<number, ListNode<Value>> = new Map()
  private listHead: ListNode<Value> | null = null
  private listTail: ListNode<Value> | null = null

  constructor(private maxCacheSize: number) {}

  private removeNodeFromList(node: ListNode<Value>) {
    if (node.prev) node.prev.next = node.next
    if (node.next) node.next.prev = node.prev

    if (node === this.listHead) this.listHead = node.next
    if (node === this.listTail) this.listTail = node.prev
  }

  private insertAtFrontOfList(node: ListNode<Value>): void {
    if (!this.listHead) {
      this.listHead = this.listTail = node
      return
    }

    node.next = this.listHead
    this.listHead.prev = node
    this.listHead = node
  }

  remove(key: number): void {
    const node = this.map.get(key)

    if (!node) return

    this.removeNodeFromList(node)
    this.map.delete(node.key)
  }

  set(key: number, value: Value): void {
    this.remove(key)

    if (this.map.size === this.maxCacheSize && this.listTail) {
      this.remove(this.listTail.key)
    }

    const node = new ListNode(key, value)
    this.insertAtFrontOfList(node)
    this.map.set(key, node)
  }

  get(key: number): Value | null {
    const node = this.map.get(key)

    if (!node) return null

    if (node !== this.listHead) {
      this.removeNodeFromList(node)
      this.insertAtFrontOfList(node)
    }

    return node.value
  }
}
