import { TreeNode } from '../4-2.minimal-tree'
import { getListOfDepths } from '../4-3.list-of-depths'

test('能正确的获得层序遍历的结果', () => {
  const root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.left.right = new TreeNode(5)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(7)

  expect(getListOfDepths(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]])
})
