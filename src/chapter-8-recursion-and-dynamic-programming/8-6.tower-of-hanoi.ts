export class Tower {
  private data: number[] = []

  constructor(public index: number) {}

  moveTopTo(t: Tower) {
    if (!this.data.length) {
      throw new Error('Empty tower')
    }

    t.add(this.data.pop()!)
  }

  size() {
    return this.data.length
  }

  add(item: number): void {
    this.data.push(item)
  }

  moveDisks(n: number, dest: Tower, buffer: Tower): void {
    if (n > 0) {
      this.moveDisks(n - 1, buffer, dest)
      this.moveTopTo(dest)
      buffer.moveDisks(n - 1, dest, this)
    }
  }

  validate(): boolean {
    for (let i = 0; i + 1 < this.data.length; ++i) {
      if (this.data[i] < this.data[i + 1]) return false
    }

    return true
  }
}

export const move = (towers: [Tower, Tower, Tower]): void => {
  towers[0].moveDisks(towers[0].size(), towers[2], towers[1])
}
