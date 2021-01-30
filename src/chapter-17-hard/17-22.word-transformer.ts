import { Queue } from '../util/Queue'
import { TernarySearchTrie } from '../util/TernarySearchTrie'

export const transform = (
  source: string,
  dist: string,
  dictionary: string[]
): string[] => {
  const trie = new TernarySearchTrie<boolean>()

  for (let i = 0; i < dictionary.length; ++i) {
    trie.put(dictionary[i], true)
  }

  const getTransformWords = (word: string, index: number): Iterable<string> => {
    const pattern = [...word]
    pattern[index] = '.'

    return trie.keysThatMatch(pattern.join(''))
  }

  const buildPath = (
    edgeTo: Map<string, string>,
    dist: string,
    source: string
  ): string[] => {
    const result: string[] = []

    let cur = dist
    while (cur != source) {
      result.push(cur)
      cur = edgeTo.get(cur)!
    }
    result.push(source)
    result.reverse()
    return result
  }

  const edgeTo: Map<string, string> = new Map()

  edgeTo.set(source, source)
  const visited: Set<string> = new Set()
  visited.add(source)
  const queue = new Queue<string>()
  queue.enqueue(source)

  while (queue.size()) {
    const word = queue.dequeue()!

    for (let i = 0; i < word.length; ++i) {
      const nextWords = getTransformWords(word, i)
      for (const next of nextWords) {
        if (visited.has(next)) continue
        edgeTo.set(next, word)
        if (next === dist) return buildPath(edgeTo, dist, source)

        visited.add(next)
        queue.enqueue(next)
      }
    }
  }

  return []
}
