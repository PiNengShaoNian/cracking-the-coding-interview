export const createFindClosestFunc = (txt: string) => {
  const wordMap: Map<string, number[]> = new Map()
  const words = txt.split(/\s+/)

  for (let i = 0; i < words.length; ++i) {
    if (!wordMap.has(words[i])) {
      wordMap.set(words[i], [])
    }

    wordMap.get(words[i])!.push(i)
  }

  return (word1: string, word2: string): number => {
    let result = Infinity

    const location1 = wordMap.get(word1)
    const location2 = wordMap.get(word2)

    if (!location1 || !location2) return -1

    let index1 = 0
    let index2 = 0

    while (index1 < location1.length && index2 < location2.length) {
      const dis = Math.abs(location2[index2] - location1[index1])

      if (dis < result) result = dis

      if (location1[index1] < location2[index2]) ++index1
      else ++index2
    }

    return result
  }
}
