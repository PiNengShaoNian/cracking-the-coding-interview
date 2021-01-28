export const split = (dictionary: Set<string>, sentence: string): string => {
  const core = (
    dictionary: Set<string>,
    sentence: string,
    start: number,
    memo: [number, string][]
  ): [number, string] => {
    if (start >= sentence.length) return [0, '']

    if (memo[start]) return memo[start]

    let bestInvalid = Infinity
    let bestParsing = ''
    let index = start
    let partial = ''
    let invalid = 0
    while (index < sentence.length) {
      const char = sentence[index]

      partial += char
      invalid = dictionary.has(partial) ? 0 : partial.length

      if (invalid < bestInvalid) {
        const result = core(dictionary, sentence, index + 1, memo)

        if (result[0] + invalid < bestInvalid) {
          bestInvalid = result[0] + invalid
          bestParsing = partial + ' ' + result[1]

          if (bestInvalid === 0) break
        }
      }

      ++index
    }

    return (memo[start] = [bestInvalid, bestParsing])
  }

  const memo: [number, string][] = []
  return core(dictionary, sentence, 0, memo)[1].trim()
}
