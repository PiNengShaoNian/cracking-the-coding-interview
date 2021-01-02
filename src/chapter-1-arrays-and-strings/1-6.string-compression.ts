export const stringCompression = (str: string): string => {
  let result = ''

  for (let i = 0; i < str.length; ++i) {
    const char = str[i]
    let cur = i
    let count = 1
    while (cur + 1 < str.length && str[++cur] === char) ++count

    result += char + count
    i += count - 1
  }

  return result.length < str.length ? result : str
}
