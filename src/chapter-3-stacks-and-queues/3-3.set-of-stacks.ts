export class SetOfStacks {
  private stacks: number[][] = []
  private cur = 0
  private stackSize

  constructor(stackSize: number) {
    this.stackSize = stackSize
  }

  push(value: number): void {
    if (!this.stacks[this.cur]) {
      this.stacks[this.cur] = []
    }

    if (this.stacks[this.cur].length >= this.stackSize) {
      ++this.cur
      this.push(value)
      return
    }

    this.stacks[this.cur].push(value)
  }

  pop(): number {
    if (this.isEmpty()) {
      throw new Error('Empty stack')
    }

    const curStack = this.stacks[this.cur]
    const value = curStack.pop()!

    if (!curStack.length && this.cur >= 1) {
      --this.cur
    }

    return value
  }

  peek(): number {
    if (this.isEmpty()) {
      throw new Error('Empty stack')
    }

    const curStack = this.stacks[this.cur]
    return curStack[curStack.length - 1]
  }

  isEmpty() {
    return !this.stacks.length || !this.stacks[this.cur].length
  }
}
