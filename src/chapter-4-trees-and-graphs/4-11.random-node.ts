import { uniform } from '../util/uniform'

export class TreeNode {
  public left: TreeNode | null = null
  public right: TreeNode | null = null
  private _value: number
  private _size: number = 0

  constructor(value: number) {
    this._value = value
  }

  insert(value: number): void {
    if (value === this._value) return

    if (value < this._value) {
      if (!this.left) this.left = new TreeNode(value)
      else this.left.insert(value)
    } else {
      if (!this.right) this.right = new TreeNode(value)
      else this.right.insert(value)
    }
  }

  randomNode(): TreeNode {
    const leftSize = this.left ? this.left.size() : 0
    const index = uniform(0, this._size)

    if (index < leftSize) return this.left!.randomNode()
    else if (index === this.size()) return this
    else return this.right!.randomNode()
  }

  value(): number {
    return this._value
  }

  size(): number {
    return this._size
  }
}
