export class Queue {
  private stackIn: number[] = []
  private stackOut: number[] = []
  private _size = 0

  size(): number {
    return this._size
  }

  front(): number {
    if (this.isEmpty()) {
      throw new Error('Empty queue')
    }

    if (!this.stackOut.length) {
      this.transferElems()
    }

    return this.stackOut[this.stackOut.length - 1]
  }

  dequeue(): number {
    if (this.isEmpty()) {
      throw new Error('Empty queue')
    }

    if (!this.stackOut.length) {
      this.transferElems()
    }

    --this._size
    return this.stackOut.pop()!
  }

  private transferElems() {
    while (this.stackIn.length) {
      this.stackOut.push(this.stackIn.pop()!)
    }
  }

  enqueue(value: number): void {
    this.stackIn.push(value)
    this._size++
  }

  isEmpty(): boolean {
    return this.size() === 0
  }
}
