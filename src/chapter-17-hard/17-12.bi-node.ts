export class BiNode {
  constructor(
    public value: number,
    public node1: BiNode | null = null,
    public node2: BiNode | null = null
  ) {}
}

export const covert = (root: BiNode | null): [BiNode, BiNode] | null => {
  if (!root) return null

  const pair1 = covert(root.node1)
  const pair2 = covert(root.node2)

  if (pair1) {
    pair1[1].node1 = root
    root.node2 = pair1[1]
  }

  if (pair2) {
    root.node1 = pair2[0]
    pair2[0].node2 = root
  }

  return [pair1 ? pair1[0] : root, pair2 ? pair2[1] : root]
}
