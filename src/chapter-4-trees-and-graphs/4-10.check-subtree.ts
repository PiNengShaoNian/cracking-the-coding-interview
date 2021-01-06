import { TreeNode } from './4-2.minimal-tree'

export const containsTree = (tree1: TreeNode, tree2: TreeNode): boolean => {
  const subtree = (tree1: TreeNode | null, tree2: TreeNode): boolean => {
    if (!tree1) return false
    let result = false
    if (tree1.value === tree2.value) result = match(tree1, tree2)

    if (!result) result = match(tree1.left, tree2)

    if (!result) result = match(tree1.right, tree2)

    return result
  }

  const match = (tree1: TreeNode | null, tree2: TreeNode | null): boolean => {
    if (!tree1 && !tree2) return true
    else if (!tree1 || !tree2) return false
    else if (tree1.value !== tree2.value) return false
    else return match(tree1.left, tree2.left) && match(tree1.right, tree2.right)
  }

  return subtree(tree1, tree2)
}
