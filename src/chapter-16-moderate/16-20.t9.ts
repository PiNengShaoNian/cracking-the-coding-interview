export const getValidT9Words = (number: string, words: string[]): string[] => {
  const digitToLettersMap: Record<string, string[]> = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  const letterToDigitMap: Record<string, string> = {}

  for (const digit of Object.keys(digitToLettersMap)) {
    for (const char of digitToLettersMap[digit]) {
      letterToDigitMap[char] = digit
    }
  }

  const result: string[] = []
  for (let i = 0; i < words.length; ++i) {
    if (words[i].length !== number.length) continue
    for (let j = 0; j < number.length; ++j) {
      if (number[j] !== letterToDigitMap[words[i][j]]) break
      else if (j === number.length - 1) {
        result.push(words[i])
      }
    }
  }

  return result
}
