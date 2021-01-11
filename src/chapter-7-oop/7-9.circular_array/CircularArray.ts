export class CircularArray<T> {
  private items: T[] = []
  private head = 0

  private covert(index: number): number {
    if (index < 0) {
      index += this.items.length
    }

    return (this.head + index) % this.items.length
  }

  rotate(shiftRight: number): void {
    this.head = this.covert(shiftRight)
  }

  get(i: number): T {
    if (i < 0 || i >= this.items.length) {
      throw new Error(`Index ${i} is out of range`)
    }

    return this.items[this.covert(i)]
  }

  set(i: number, item: T): void {
    this.items[this.covert(i)] = item
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.items.length; ++i) {
      yield this.get(i)
    }
  }
}
