export const longestWord = (words: string[]): string => {
  const firstLetterMap: Map<string, string[]> = new Map()
  for (let i = 0; i < words.length; ++i) {
    const firstLetter = words[i][0]

    if (!firstLetterMap.has(firstLetter)) firstLetterMap.set(firstLetter, [])

    firstLetterMap.get(firstLetter)!.push(words[i])
  }

  words.sort((a, b) => b.length - a.length)
  const memo: Map<string, boolean> = new Map()

  const core = (
    word: string,
    memo: Map<string, boolean>,
    isPartial: boolean
  ): boolean => {
    if (!word) return true
    if (memo.has(word)) return memo.get(word)!

    const next = firstLetterMap.get(word[0])

    if (!next) return false
    let result = false

    for (let i = 0; i < next.length; ++i) {
      const partial = next[i]
      if (
        partial.length > word.length ||
        (!isPartial && partial === word) ||
        !word.startsWith(partial)
      )
        continue

      if (core(word.slice(partial.length), memo, true)) {
        result = true
        break
      }
    }

    memo.set(word, result)
    return result
  }

  for (let i = 0; i < words.length; ++i) {
    if (core(words[i], memo, false)) return words[i]
  }

  return ''
}
