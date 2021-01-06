import { TreeNode } from '../4-2.minimal-tree'
import { allSequences } from '../4-9.bst_sequences'

test('能求出所有添加序列', () => {
  const tree = new TreeNode(2)
  tree.left = new TreeNode(1)
  tree.right = new TreeNode(3)
  
  expect(allSequences(tree)).toHaveLength(2)
})
