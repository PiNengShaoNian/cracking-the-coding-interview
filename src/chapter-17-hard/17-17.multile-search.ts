import { TernarySearchTrie } from '../util/TernarySearchTrie'

export const searchAll = (
  big: string,
  smalls: string[]
): Record<string, number[]> => {
  const result: Record<string, number[]> = {}
  const trie = new TernarySearchTrie<number>()

  for (let i = 0; i < big.length; ++i) {
    trie.put(big.slice(i), i)
  }

  for (let i = 0; i < smalls.length; ++i) {
    const keys = trie.keysWithPrefix(smalls[i])

    const locations: number[] = []
    for (const key of keys) {
      locations.push(trie.get(key)!)
    }

    result[smalls[i]] = locations
  }

  return result
}
