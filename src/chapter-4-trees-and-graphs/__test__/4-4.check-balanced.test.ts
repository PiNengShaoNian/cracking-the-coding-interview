import { createMinimalBST, TreeNode } from '../4-2.minimal-tree'
import { isBalanced1, isBalanced2 } from '../4-4.check-balanced'

test('能正确的检查一棵树是否平衡', () => {
  const tree1 = new TreeNode(1)
  tree1.left = new TreeNode(2)
  tree1.right = new TreeNode(3)
  tree1.right.right = new TreeNode(4)
  tree1.right.right.right = new TreeNode(4)

  const tree2 = createMinimalBST([1, 2, 3, 4, 5, 6, 7, 8, 9])!

  expect(isBalanced2(tree1)).toBeFalsy()
  expect(isBalanced1(tree1)).toBeFalsy()

  expect(isBalanced2(tree2)).toBeTruthy()
  expect(isBalanced1(tree2)).toBeTruthy()
})
