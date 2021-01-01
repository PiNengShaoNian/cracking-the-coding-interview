export const isPermutationOfPallindrome = (str: string): boolean => {
  let result = true
  const fre = Array.from({ length: 256 }, () => 0)

  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== ' ') {
      ++fre[str.charCodeAt(i)]
    }
  }

  let flag = 0

  for (let i = 0; i < str.length; ++i) {
    if (fre[str.charCodeAt(i)] % 2) ++flag

    if (flag > 1) {
      result = false
      break
    }
  }

  return result
}
