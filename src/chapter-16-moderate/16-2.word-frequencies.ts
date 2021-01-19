export const createWordFrequenceisFunc = (
  book: string
): ((word: string) => number) => {
  const map = new Map<string, number>()

  const words = book.split(/\s+/)

  for (const word of words) {
    if (map.has(word)) map.set(word, map.get(word)! + 1)
    else map.set(word, 1)
  }

  return (word: string): number => {
    return map.get(word) ?? 0
  }
}
