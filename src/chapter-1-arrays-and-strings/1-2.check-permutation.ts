export const arePermutation = (str1: string, str2: string): boolean => {
  if (str1.length != str2.length) return false

  let result = true
  const fre = Array.from({ length: 256 }, () => 0)

  for (let i = 0; i < str1.length; ++i) {
    fre[str1.charCodeAt(i)] += 1
    fre[str2.charCodeAt(i)] += 1
  }

  for (let i = 0; i < str1.length; ++i) {
    if (fre[str1.charCodeAt(i)] % 2) {
      result = false
      break
    }
  }

  return result
}
