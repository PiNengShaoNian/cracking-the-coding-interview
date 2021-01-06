import { TreeNode } from './4-2.minimal-tree'

const countPathsWithSum = (
  root: TreeNode | null,
  num: number,
  path: number[],
  results: number[][]
): void => {
  if (!root) return

  path.push(root.value)

  if (root.value === num) {
    results.push([...path])
  }

  countPathsWithSum(root.left, num - root.value, path, results)
  countPathsWithSum(root.right, num - root.value, path, results)

  path.pop()
}

export const pathSum = (root: TreeNode, sum: number): number[][] => {
  const result: number[][] = []

  const core = (root: TreeNode, sum: number, result: number[][]) => {
    countPathsWithSum(root, sum, [], result)
    if (root.left) core(root.left, sum, result)
    if (root.right) core(root.right, sum, result)
  }

  core(root, sum, result)

  return result
}
