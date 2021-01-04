class StackInfo {
  start: number
  size: number = 0
  capacity: number
  stack: MultiStack

  constructor(start: number, capacity: number, stack: MultiStack) {
    this.start = start
    this.capacity = capacity
    this.stack = stack
  }

  isWithinStackCapacity(index: number): boolean {
    if (index < 0 || index >= this.stack.values.length) {
      return false
    }

    const contiguousIndex =
      index < this.start ? index + this.stack.values.length : index
    const end = this.start + this.capacity

    return this.start <= contiguousIndex && contiguousIndex < end
  }

  lastCapacityIndex(): number {
    return this.stack.adjustIndex(this.start + this.capacity - 1)
  }

  lastElementIndex(): number {
    return this.stack.adjustIndex(this.start + this.size - 1)
  }

  isFull(): boolean {
    return this.size === this.capacity
  }

  isEmpty(): boolean {
    return this.size === 0
  }
}

export class MultiStack {
  public values: number[]
  private info: StackInfo[]
  constructor(numberOfStacks: number, defaultSize: number) {
    this.info = Array.from(
      { length: numberOfStacks },
      (_, i) => new StackInfo(i * defaultSize, defaultSize, this)
    )

    this.values = Array.from({ length: numberOfStacks * defaultSize })
  }

  adjustIndex(index: number) {
    const max = this.values.length
    return ((index % max) + max) % max
  }

  numberOfElements(): number {
    let size = 0

    for (let i = 0; i < this.info.length; ++i) {
      size += this.info[i].size
    }

    return size
  }

  allStacksAreFull(): boolean {
    return this.numberOfElements() === this.values.length
  }

  previousIndex(index: number) {
    return this.adjustIndex(index - 1)
  }

  nextIndex(index: number): number {
    return this.adjustIndex(index + 1)
  }

  shift(stackNum: number): void {
    const stack = this.info[stackNum]

    if (stack.size >= stack.capacity) {
      const nextStack = (stackNum + 1) % this.info.length
      this.shift(nextStack)
      stack.capacity++
    }

    let index = stack.lastCapacityIndex()
    while (stack.isWithinStackCapacity(index)) {
      this.values[index] = this.values[this.previousIndex(index)]
      index = this.previousIndex(index)
    }

    this.values[stack.start] = 0
    stack.start = this.nextIndex(stack.start)
    stack.capacity--
  }

  expand(stackNum: number): void {
    this.shift((stackNum + 1) % this.info.length)
    this.info[stackNum].capacity++
  }

  push(stackNum: number, value: number): void {
    if (this.allStacksAreFull()) {
      throw new Error('All stack are full')
    }

    const stack: StackInfo = this.info[stackNum]

    if (stack.isFull()) {
      this.expand(stackNum)
    }

    ++stack.size
    this.values[stack.lastElementIndex()] = value
  }

  pop(stackNum: number): number {
    const stack = this.info[stackNum]

    if (stack.isEmpty()) {
      throw new Error('Empty stack')
    }

    const value = this.values[stack.lastElementIndex()]
    this.values[stack.lastElementIndex()] = 0
    --stack.size
    return value
  }

  peek(stackNum: number) {
    const stack = this.info[stackNum]
    return this.values[stack.lastElementIndex()]
  }

  getStackValues(stackNum: number): number[] {
    const stack = this.info[stackNum]
    const elems: number[] = []

    for (let i = 0; i < stack.size; ++i) {
      elems.push(this.adjustIndex(stack.start + i))
    }

    return elems
  }
}
