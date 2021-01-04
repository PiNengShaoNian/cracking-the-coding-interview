export class TreeNode {
  left: TreeNode | null = null
  right: TreeNode | null = null

  constructor(public value: number) {}
}

export const createMinimalBST = (arr: number[]): TreeNode | null => {
  if (!arr.length) return null

  const buildTree = (l: number, r: number): TreeNode | null => {
    if (l > r) return null
    const mid = l + ((r - l) >> 1)

    const root = new TreeNode(arr[mid])

    root.left = buildTree(l, mid - 1)
    root.right = buildTree(mid + 1, r)

    return root
  }

  return buildTree(0, arr.length - 1)
}
