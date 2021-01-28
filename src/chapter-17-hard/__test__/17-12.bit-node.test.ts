import { BiNode, covert } from '../17-12.bi-node'

test('能正确地将二叉树转化为链表', () => {
  const tree = new BiNode(
    4,
    new BiNode(2, new BiNode(1, new BiNode(0)), new BiNode(3)),
    new BiNode(5, null, new BiNode(6))
  )

  const pair = covert(tree)!

  expect(pair[0].value).toBe(0)
  expect(pair[1].value).toBe(6)

  const values: number[] = []

  let cur: null | BiNode = pair[0]

  while (cur) {
    values.push(cur.value)
    cur = cur.node1
  }

  const reversed: number[] = []
  cur = pair[1]
  while (cur) {
    reversed.push(cur.value)
    cur = cur.node2
  }

  expect(values).toEqual([0, 1, 2, 3, 4, 5, 6])
  expect(reversed).toEqual([6, 5, 4, 3, 2, 1, 0])
})
