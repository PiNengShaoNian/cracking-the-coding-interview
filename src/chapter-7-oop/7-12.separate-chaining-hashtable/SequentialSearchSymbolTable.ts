import { Queue } from '../../util/Queue'
import { Comparable } from './Comparable'
import { keyComparator } from './keyComparator'

class Node<Key, Value> {
  constructor(
    public key: Key,
    public value: Value,
    public next: Node<Key, Value> | null
  ) {}
}

export class SequentialSearchSymbolTable<
  Key extends string | number | Comparable<Key>,
  Value
> {
  private first: Node<Key, Value> | null = null
  private _size: number = 0

  size(): number {
    return this._size
  }

  isEmpty(): boolean {
    return this._size === 0
  }

  contains(key: Key) {
    return this.get(key) !== null
  }

  get(key: Key): Value | null {
    for (let node = this.first; node; node = node.next) {
      if (keyComparator(key, node.key) === 0) {
        return node.value
      }
    }

    return null
  }

  put(key: Key, value: Value) {
    for (let node = this.first; node; node = node.next) {
      if (keyComparator(key, node.key) === 0) {
        node.value = value
        return
      }
    }

    this.first = new Node(key, value, this.first)
    this._size++
  }

  delete(key: Key): void {
    if (this.first && keyComparator(this.first.key, key) === 0) {
      this.first = this.first.next
      this._size--
      return
    }

    for (let node = this.first; node; node = node.next) {
      if (node.next && keyComparator(node.next.key, key) === 0) {
        node.next = node.next.next
        this._size--
        return
      }
    }
  }

  keys(): Iterable<Key> {
    const keys = new Queue<Key>()

    for (let node = this.first; node; node = node.next) {
      keys.enqueue(node.key)
    }

    return keys
  }
}
