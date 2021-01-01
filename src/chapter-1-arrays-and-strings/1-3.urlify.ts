export const urlify = (str: string, len: number): string => {
  let numberOfSpaces = 0

  for (let i = 0; i < len; ++i) {
    if (str[i] === ' ') ++numberOfSpaces
  }

  const chars = Array.from({ length: len + 2 * numberOfSpaces })

  let index = 0
  for (let i = 0; i < len; ++i) {
    if (str[i] === ' ') {
      chars[index++] = '%'
      chars[index++] = '2'
      chars[index++] = '0'
    } else chars[index++] = str[i]
  }

  return chars.join('')
}
