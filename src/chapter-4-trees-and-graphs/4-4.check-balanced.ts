import { TreeNode } from './4-2.minimal-tree'

const treeHeight = (root: TreeNode | null): number => {
  if (!root) return 0

  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
}

export const isBalanced1 = (root: TreeNode | null): boolean => {
  if (!root) return true

  let result = Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1

  if (result) {
    result = isBalanced1(root.left)
  }

  if (result) {
    result = isBalanced1(root.right)
  }

  return result
}

export const isBalanced2 = (root: TreeNode): boolean => {
  const checkHeight = (root: TreeNode | null): number => {
    if (!root) return -1

    const leftHeight = checkHeight(root.left)

    if (leftHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER

    const rightHeight = checkHeight(root.right)

    if (rightHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER

    const diff = leftHeight - rightHeight

    if (Math.abs(diff) > 1) return Number.MIN_SAFE_INTEGER
    else return Math.max(leftHeight, rightHeight) + 1
  }

  return checkHeight(root) !== Number.MIN_SAFE_INTEGER
}
