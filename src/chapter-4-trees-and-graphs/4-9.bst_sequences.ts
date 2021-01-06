import { TreeNode } from './4-2.minimal-tree'
import { LinkedList } from '../util/LinkedList'

const cloneLinkedList = <T>(list: LinkedList<T>): LinkedList<T> => {
  const newList = new LinkedList<T>()

  for (const value of list) {
    newList.addLast(value)
  }

  return newList
}

const weaveLists = (
  first: LinkedList<number>,
  second: LinkedList<number>,
  results: LinkedList<number>[],
  prefix: LinkedList<number>
) => {
  if (first.isEmpty() || second.isEmpty()) {
    const result = cloneLinkedList(prefix)

    for (const value of first) {
      result.addLast(value)
    }

    for (const value of second) {
      result.addLast(value)
    }

    results.push(result)

    return
  }

  const leftHead = first.removeFirst()!
  prefix.addLast(leftHead)
  weaveLists(first, second, results, prefix)
  first.addFirst(leftHead)
  prefix.removeLast()

  const rightHead = second.removeFirst()!
  prefix.addFirst(rightHead)
  weaveLists(first, second, results, prefix)
  second.addFirst(rightHead)
  prefix.removeLast()
}

export const allSequences = (root: TreeNode | null): LinkedList<number>[] => {
  const result: LinkedList<number>[] = []

  if (!root) {
    result.push(new LinkedList<number>())
    return result
  }

  const prefix = new LinkedList<number>()
  prefix.addLast(root.value)

  const leftSequences = allSequences(root.left)
  const rightSequences = allSequences(root.right)

  for (const left of leftSequences) {
    for (const right of rightSequences) {
      const weave: LinkedList<number>[] = []
      weaveLists(left, right, weave, prefix)
      for (const list of weave) {
        result.push(list)
      }
    }
  }

  return result
}
