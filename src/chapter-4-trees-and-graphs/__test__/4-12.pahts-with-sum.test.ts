import { pathSum } from '../4-12.pahts-with-sum'
import { TreeNode } from '../4-2.minimal-tree'

test('能正确地求出所有路径', () => {
  const tree = new TreeNode(10)
  tree.left = new TreeNode(5)
  tree.left.left = new TreeNode(3)
  tree.left.right = new TreeNode(2)
  tree.left.left.left = new TreeNode(3)
  tree.left.left.right = new TreeNode(-2)
  tree.left.right.right = new TreeNode(1)
  tree.right = new TreeNode(-3)
  tree.right.right = new TreeNode(11)

  const paths = pathSum(tree, 8)

  expect(paths).toHaveLength(3)

  expect(paths).toEqual([
    [5, 3],
    [5, 2, 1],
    [-3, 11],
  ])
})
