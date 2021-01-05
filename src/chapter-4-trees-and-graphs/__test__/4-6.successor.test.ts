import { findListNodeByVal } from '../../util/findListNode'
import { TreeNode, getSuccessor } from '../4-6.successor'

test('能正确的获得中序遍历的后继节点', () => {
  const tree = new TreeNode(65, null)

  tree.left = new TreeNode(20, tree)
  tree.right = new TreeNode(90, tree)
  tree.left.left = new TreeNode(10, tree.left)
  tree.left.right = new TreeNode(30, tree.left)
  tree.left.right.left = new TreeNode(21, tree.left.right)
  tree.left.right.right = new TreeNode(33, tree.left.right)
  tree.right.right = new TreeNode(90, tree.right)

  expect(getSuccessor(tree.left.left)?.value).toBe(20)
  expect(getSuccessor(tree.left)?.value).toBe(21)
  expect(getSuccessor(tree.left.right.right)?.value).toBe(65)
  expect(getSuccessor(tree)?.value).toBe(90)
  expect(getSuccessor(tree.right.right)).toBeNull()
})
