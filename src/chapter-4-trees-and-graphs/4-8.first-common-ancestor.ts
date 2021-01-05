import { TreeNode } from './4-2.minimal-tree'

export const commonAncestor = (
  node1: TreeNode,
  node2: TreeNode,
  root: TreeNode | null
): TreeNode | null => {
  if (!root) return null
  if (root === node1 && root === node2) return root

  const rx = commonAncestor(node1, node2, root.left)

  if (rx && rx !== node1 && rx !== node2) return rx

  const ry = commonAncestor(node1, node2, root.right)

  if (ry && ry !== node1 && ry !== node2) return ry

  if (rx && ry) return root
  if (root === node1 || root === node2) return root
  else return rx || rx
}
