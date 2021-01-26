import { WeightedQuickUnion } from '../util/WeightedQuickUnion'

export const nameFrequencies = (
  frequencies: [string, number][],
  sameNames: [string, string][]
): [string, number][] => {
  const nameToIdMap: Map<string, number> = new Map()
  const sameNameMap: Map<string, string> = new Map()
  const uf = new WeightedQuickUnion(frequencies.length)
  const frequenciesMap: Map<string, number> = new Map()
  const nameGroups: Map<number, string[]> = new Map()

  for (let i = 0; i < frequencies.length; ++i) {
    nameToIdMap.set(frequencies[i][0], i)
  }

  for (let i = 0; i < sameNames.length; ++i) {
    let [first, second] = sameNames[i]
    uf.union(nameToIdMap.get(first)!, nameToIdMap.get(second)!)
  }

  for (let i = 0; i < frequencies.length; ++i) {
    const connectedComponentId = uf.find(i)
    if (!nameGroups.has(connectedComponentId))
      nameGroups.set(connectedComponentId, [])

    nameGroups.get(connectedComponentId)!.push(frequencies[i][0])
  }

  const groups = nameGroups.values()

  for (const group of groups) {
    const commonName = group[0]

    for (let i = 0; i < group.length; ++i) {
      sameNameMap.set(group[i], commonName)
    }
  }

  for (let i = 0; i < frequencies.length; ++i) {
    const [name, num] = frequencies[i]
    const commonName = sameNameMap.get(name)!

    if (!frequenciesMap.has(commonName)) {
      frequenciesMap.set(commonName, num)
    } else frequenciesMap.set(commonName, frequenciesMap.get(commonName)! + num)
  }

  return [...frequenciesMap.entries()]
}
