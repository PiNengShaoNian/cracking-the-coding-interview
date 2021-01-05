import { createMinimalBST } from '../4-2.minimal-tree'
import { isBST, isBST1 } from '../4-5.validate-bst'

test('能正确的检测是否为二叉搜索树', () => {
  const tree1 = createMinimalBST([1, 2, 3, 4, 5, 6, 7])!
  const tree2 = createMinimalBST([1, 3, 2, 4, 5, 6, 7])!

  expect(isBST(tree1)).toBeTruthy()
  expect(isBST(tree2)).toBeFalsy()
  expect(isBST1(tree1)).toBeTruthy()
  expect(isBST1(tree2)).toBeFalsy()
})
