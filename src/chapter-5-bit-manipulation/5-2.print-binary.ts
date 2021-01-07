export const printBinary = (num: number): string => {
  let result = '.'

  if (num >= 1 || num <= 0) throw new Error('Invalid input')

  let frac = 0.5

  while (num > 0) {
    if (result.length > 32) throw new Error('Invalid input')

    if (num >= frac) {
      result += '1'
      num -= frac
    } else {
      result += '0'
    }

    frac /= 2
  }

  return result
}
