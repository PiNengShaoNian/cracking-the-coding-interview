class TreeNode<E> {
  public e: E
  public left: TreeNode<E> | null
  public right: TreeNode<E> | null
  public size = 0

  constructor(e: E) {
    this.e = e
    this.left = null
    this.right = null
    this.size = 1
  }
}

class BST<E extends number | string> {
  public root: TreeNode<E> | null = null

  compare(a: E, b: E): number {
    if (typeof a === 'string') {
      if (a === b) return 0
      return a > b ? 1 : -1
    } else {
      return (a as number) - (b as number)
    }
  }

  put(value: E) {
    this.root = this._put(this.root, value)
  }

  private _put(node: null | TreeNode<E>, value: E): TreeNode<E> {
    if (!node) return new TreeNode(value)

    const compare = this.compare(value, node.e)

    if (compare <= 0) {
      node.left = this._put(node.left, value)
    } else {
      node.right = this._put(node.right, value)
    }

    node.size = this._size(node.left) + 1 + this._size(node.right)

    return node
  }

  private _size(node: TreeNode<E> | null): number {
    if (!node) return 0

    return node.size
  }

  rank(key: E) {
    return this._rank(this.root, key)
  }

  private _rank(node: TreeNode<E> | null, key: E): number {
    if (!node) return 0

    const compare = this.compare(key, node.e)
    if (compare < 0) {
      return this._rank(node.left, key)
    } else if (compare > 0) {
      return this._size(node.left) + 1 + this._rank(node.right, key)
    } else return this._size(node.left)
  }
}

export class Track {
  private tree = new BST<number>()
  track(x: number): void {
    this.tree.put(x)
  }

  getRankOfNumber(x: number): number {
    return this.tree.rank(x)
  }
}
