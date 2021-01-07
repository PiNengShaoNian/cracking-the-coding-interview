export const getNext = (n: number): number => {
  let c = n
  let c0 = 0
  let c1 = 0

  while ((c & 1) === 0 && c !== 0) {
    ++c0
    c >>= 1
  }

  while ((c & 1) === 1) {
    ++c1
    c >>= 1
  }

  if (c1 + c0 === 0) throw new Error('Invalid input')

  const p = c1 + c0

  n |= 1 << p
  n &= ~((1 << p) - 1)
  n |= (1 << (c1 - 1)) - 1

  return n
}

export const getPrev = (n: number): number => {
  let c = n
  let c1 = 0
  let c0 = 0

  while ((c & 1) === 1) {
    ++c1
    c >>= 1
  }

  if (c === 0) return -1

  while ((c & 1) === 0 && c !== 0) {
    ++c0
    c >>= 1
  }

  const p = c1 + c0

  n &= ~0 << p

  const mask = (1 << (c1 + 1)) - 1

  n |= mask << (c0 - 1)

  return n
}
