import { Queue } from '../util/queue'
import { TreeNode } from './4-2.minimal-tree'

type NodeWithDepth = {
  node: TreeNode
  depth: number
}
export const getListOfDepths = (root: TreeNode): number[][] => {
  const queue = new Queue<NodeWithDepth>()
  const result: number[][] = []

  queue.enqueue({
    node: root,
    depth: 0,
  })

  while (!queue.isEmpty()) {
    const { node, depth } = queue.dequeue()!

    if (!result[depth]) {
      result[depth] = []
    }

    if (node.left) {
      queue.enqueue({
        node: node.left,
        depth: depth + 1,
      })
    }

    if (node.right) {
      queue.enqueue({
        node: node.right,
        depth: depth + 1,
      })
    }

    result[depth].push(node.value)
  }
  return result
}
