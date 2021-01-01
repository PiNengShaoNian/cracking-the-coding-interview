export const isUnique = (str: string): boolean => {
  let result = true
  const fre = Array.from({ length: 256 }, () => 0)

  for (let i = 0; i < str.length; ++i) {
    const code = str.charCodeAt(i)
    fre[code] += 1
    if (fre[code] > 1) {
      result = false
      break
    }
  }

  return result
}

//假设字符串有26位小写字母组成
export const isUnique1 = (str: string): boolean => {
  let checker = 0 >>> 0
  let result = true
  let offset = 97

  for (let i = 0; i < str.length; ++i) {
    const code = str.charCodeAt(i) - offset
    if (checker & (1 << code)) {
      result = false
      break
    }

    checker |= 1 << code
  }

  return result
}
