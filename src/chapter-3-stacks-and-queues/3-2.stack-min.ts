export class Stack {
  private stack: number[] = []
  private minInfo: number[] = []
  size(): number {
    return this.stack.length
  }

  min() {
    return this.minInfo[this.minInfo.length - 1] ?? Infinity
  }

  peek(): number {
    if (this.isEmpty()) {
      throw new Error('empty stack')
    }

    return this.stack[this.stack.length - 1]
  }

  pop(): number {
    if (this.isEmpty()) {
      throw new Error('Empty stack')
    }

    this.minInfo.pop()
    return this.stack.pop()!
  }

  push(value: number): void {
    const min = this.min()

    if (value < min) {
      this.minInfo.push(value)
    } else {
      this.minInfo.push(min)
    }
    this.stack.push(value)
  }

  isEmpty() {
    return this.stack.length === 0
  }
}
