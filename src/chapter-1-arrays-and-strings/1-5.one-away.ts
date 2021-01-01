export const isOneAway = (first: string, second: string): boolean => {
  if (Math.abs(first.length - second.length) > 1) return false

  let str1StartIndex = 0
  let str1EndIndex = first.length - 1
  let str2StartIndex = 0
  let str2EndIndex = second.length - 1

  while (str1StartIndex <= str1EndIndex && str2StartIndex <= str2EndIndex) {
    if (first[str1StartIndex] === second[str2StartIndex]) {
      ++str1StartIndex
      ++str2StartIndex
    } else {
      break
    }
  }

  while (str1StartIndex <= str1EndIndex && str2StartIndex <= str2EndIndex) {
    if (first[str1EndIndex] === second[str2EndIndex]) {
      --str1EndIndex
      --str2EndIndex
    } else {
      break
    }
  }

  return (
    Math.abs(str1EndIndex + 1 - str1StartIndex) <= 1 &&
    Math.abs(str2EndIndex + 1 - str2StartIndex) <= 1
  )
}
