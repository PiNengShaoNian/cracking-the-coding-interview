const setBit = (num: number, i: number, isBit1: boolean): number => {
  const value = isBit1 === true ? 1 : 0
  return num | (value << i)
}

const getBit = (num: number, i: number): boolean => {
  return (num & (1 << i)) !== 0
}

export const insertion = (
  m: number,
  n: number,
  i: number,
  j: number
): number => {
  for (let it = i; it <= j; ++it) {
    const isBit1 = getBit(m, it - i)
    n = setBit(n, it, isBit1)
  }

  return n
}

export const insertion1 = (
  m: number,
  n: number,
  i: number,
  j: number
): number => {
  const allOnes = ~0
  const left = allOnes << (j + 1)
  const right = (1 << i) - 1
  const mask = left | right

  const n_cleared = n & mask
  const m_shifted = m << i

  return n_cleared | m_shifted
}
