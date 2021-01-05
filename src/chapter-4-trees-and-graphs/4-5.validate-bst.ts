import { TreeNode } from './4-2.minimal-tree'

export const isBST = (root: TreeNode): boolean => {
  let result = true

  let prevValue = -Infinity
  const inorder = (root: TreeNode | null): boolean => {
    if (!root) return false

    if (inorder(root.left)) return true
    if (prevValue > root.value) {
      result = false
      return true
    } else {
      prevValue = root.value
    }
    if (inorder(root.right)) return true

    return false
  }

  inorder(root)

  return result
}

export const isBST1 = (root: TreeNode): boolean => {
  const checkBST = (
    root: TreeNode | null,
    min: number,
    max: number
  ): boolean => {
    if (!root) return true

    let result = true

    if (root.value < min || root.value >= max) {
      result = false
    }

    if (result) {
      result = checkBST(root.left, min, root.value)
    }

    if (result) {
      result = checkBST(root.right, root.value, max)
    }

    return result
  }

  return checkBST(root, -Infinity, Infinity)
}
