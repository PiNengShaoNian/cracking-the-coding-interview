export const doesMatch = (pattern: string, str: string): boolean => {
  if (!pattern) return false

  const countOf = (pattern: string, char: string): number => {
    let res = 0

    for (let i = 0; i < pattern.length; ++i) {
      if (pattern[i] === char) ++res
    }

    return res
  }
  const buildFromPattern = (
    pattern: string,
    main: string,
    alt: string
  ): string => {
    let res = ''

    const first = pattern[0]
    for (let i = 0; i < pattern.length; ++i) {
      if (pattern[i] === first) res += main
      else res += alt
    }

    return res
  }
  const mainChar = pattern[0]
  const altChar = mainChar === 'a' ? 'b' : 'a'
  const countOfMain = countOf(pattern, mainChar)
  const countOfAlt = pattern.length - countOfMain
  const maxMainSize = (str.length / countOfMain) >> 0
  const firstAltIndex = pattern.indexOf(altChar)
  for (let mainSize = 0; mainSize <= maxMainSize; ++mainSize) {
    const remainingLength = str.length - countOfMain * mainSize

    const first = str.slice(0, mainSize)
    if (countOfAlt === 0 || remainingLength % countOfAlt === 0) {
      const altSize = countOfAlt === 0 ? 0 : remainingLength / countOfAlt
      const altIndex = firstAltIndex * mainSize
      const second =
        countOfAlt === 0 ? '' : str.slice(altIndex, altIndex + altSize)

      const cand = buildFromPattern(pattern, first, second)

      if (cand === str) return true
    }
  }
  return false
}
