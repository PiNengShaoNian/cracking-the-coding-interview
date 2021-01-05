export class TreeNode {
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(public value: number, public parent: TreeNode | null = null) {}
}

export const getSuccessor = (node: TreeNode): TreeNode | null => {
  const leftMostNode = (node: TreeNode): TreeNode => {
    if (node.left) return leftMostNode(node.left)

    return node
  }

  if (node.right) {
    return leftMostNode(node.right)
  } else {
    let n = node
    let x = n.parent

    while (x && x.left != n) {
      n = x
      x = x.parent
    }

    return x
  }
}
