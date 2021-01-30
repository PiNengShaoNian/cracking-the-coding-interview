import { TernarySearchTrie } from '../util/TernarySearchTrie'

const getWordGroup = (words: string[]): string[][] => {
  const result: string[][] = []
  for (let i = 0; i < words.length; ++i) {
    const len = words[i].length

    if (!result[len]) result[len] = []

    result[len].push(words[i])
  }

  return result
}

const isValid = (
  rectangle: string[],
  tries: TernarySearchTrie<boolean>[],
  wordGroup: string[][],
  width: number,
  heigth: number
): boolean => {
  if (!tries[heigth]) {
    tries[heigth] = new TernarySearchTrie()
    for (const word of wordGroup[heigth]) {
      tries[heigth].put(word, true)
    }
  }

  for (let col = 0; col < width; ++col) {
    let prefix: string = ''

    for (let i = 0; i < rectangle.length; ++i) {
      prefix += rectangle[i][col]
    }

    const keys = tries[heigth].keysWithPrefix(prefix)

    let hasPrefix = false
    for (const _ of keys) {
      hasPrefix = true
      break
    }

    if (!hasPrefix) return false
  }

  return true
}

const makeRectangle = (
  rectangle: string[],
  width: number,
  height: number,
  tries: TernarySearchTrie<boolean>[],
  wordGroup: string[][]
): string[] | null => {
  if (height === rectangle.length) {
    if (isValid(rectangle, tries, wordGroup, width, height)) return rectangle
  }

  if (!isValid(rectangle, tries, wordGroup, width, height)) return null

  for (let i = 0; i < wordGroup[width].length; ++i) {
    rectangle.push(wordGroup[width][i])

    const rect = makeRectangle(rectangle, width, height, tries, wordGroup)

    if (rect) return rect
    else rectangle.pop()
  }

  return null
}

export const maxRectangle = (words: string[]): string[] => {
  let result: string[] = []
  const wordGroup: string[][] = getWordGroup(words)
  const tries: TernarySearchTrie<boolean>[] = []

  const maxWordLength = wordGroup.length - 1
  const maxRectangleSize = maxWordLength ** 2

  for (let size = maxRectangleSize; size > 0; --size) {
    for (let width = maxWordLength; width > 0; --width) {
      if (
        size % width !== 0 ||
        size / width > maxWordLength ||
        !wordGroup[width] ||
        !wordGroup[size / width]
      )
        continue

      const rectangle = makeRectangle([], width, size / width, tries, wordGroup)
      if (rectangle) return rectangle
    }
  }
  return result
}
