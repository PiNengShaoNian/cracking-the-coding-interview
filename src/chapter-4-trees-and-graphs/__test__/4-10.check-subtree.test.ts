import { containsTree } from '../4-10.check-subtree'
import { TreeNode } from '../4-2.minimal-tree'

test('能正确的求出是否包含子树', () => {
  const tree = new TreeNode(1)
  tree.left = new TreeNode(2)
  tree.right = new TreeNode(3)
  tree.left.left = new TreeNode(4)

  const tree2 = new TreeNode(2)
  tree2.right = new TreeNode(4)

  expect(containsTree(tree, tree)).toBeTruthy()
  expect(containsTree(tree, tree.left)).toBeTruthy()
  expect(containsTree(tree, tree.right)).toBeTruthy()
  expect(containsTree(tree, tree2)).toBeFalsy()
})
     