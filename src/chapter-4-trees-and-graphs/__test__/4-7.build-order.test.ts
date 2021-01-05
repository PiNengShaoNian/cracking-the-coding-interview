import { getBuildOrder } from '../4-7.build-order'

test('能获得正确的拓扑排序', () => {
  const deps: [string, string][] = [
    ['a', 'd'],
    ['f', 'b'],
    ['b', 'd'],
    ['f', 'a'],
    ['d', 'c'],
  ]
  const order = getBuildOrder(['a', 'b', 'c', 'd', 'e', 'f'], deps)

  const projectToIndexMap: Record<string, number> = {}

  for (let i = 0; i < order.length; ++i) {
    projectToIndexMap[order[i]] = i
  }

  for (let i = 0; i < deps.length; ++i) {
    const [a, b] = deps[i]

    expect(projectToIndexMap[a]).toBeLessThan(projectToIndexMap[b])
  }

  deps.push(['c', 'd'])

  expect(getBuildOrder(['a', 'b', 'c', 'd', 'e', 'f'], deps)).toHaveLength(0)
})
