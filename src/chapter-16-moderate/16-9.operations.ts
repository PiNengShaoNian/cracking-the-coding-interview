const negate = (a: number): number => {
  let newSign = a > 0 ? -1 : 1
  let sign = a > 0 ? 1 : -1
  const getSign = (n: number): number => (n > 0 ? 1 : -1)

  let result = 0

  while (a !== 0) {
    let offset = newSign
    while (getSign(a + 2 * offset) === sign) offset *= 2
    result += offset
    a += offset
  }

  return result
}

const abs = (a: number): number => {
  if (a < 0) return negate(a)
  return a
}

export const minus = (a: number, b: number): number => {
  return a + negate(b)
}

export const multiply = (a: number, b: number): number => {
  if (a < b) {
    return multiply(b, a)
  }

  let sum = 0
  for (let i = abs(b); i > 0; --i) {
    sum += a
  }

  if (b < 0) return negate(sum)

  return sum
}

export const divide = (a: number, b: number): number => {
  const absa = abs(a)
  const absb = abs(b)
  let product = 0
  let x = 0

  while (product + absb <= absa) {
    product += absb
    ++x
  }

  if ((a < 0 && b < 0) || (a > 0 && b > 0)) {
    return x
  } else return negate(x)
}

divide(-64200, 50512)
