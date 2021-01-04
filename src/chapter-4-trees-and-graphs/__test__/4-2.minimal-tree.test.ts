import { createMinimalBST, TreeNode } from '../4-2.minimal-tree'

const treeHeight = (root: TreeNode | null): number => {
  if (!root) return 0

  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right))
}

const isBST = (root: TreeNode): boolean => {
  const values: number[] = []

  const inorder = (root: TreeNode | null): void => {
    if (!root) return

    inorder(root.left)
    values.push(root.value)
    inorder(root.right)
  }

  inorder(root)

  let result = true

  for (let i = 0; i + 1 < values.length; ++i) {
    if (values[i] > values[i + 1]) {
      result = false
      break
    }
  }

  return result
}

test('能正确的构造出树', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7]

  const root = createMinimalBST(arr)!

  expect(treeHeight(root)).toBe(3)

  expect(isBST(root)).toBeTruthy()

  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]

  const root2 = createMinimalBST(arr1)!

  expect(treeHeight(root2)).toBe(4)

  expect(isBST(root2)).toBeTruthy()
})
