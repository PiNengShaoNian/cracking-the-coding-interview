export const conversion = (a: number, b: number) => {
  let count = 0
  for (let c = a ^ b; c !== 0; c &= c - 1) count++

  return count
}

export const bitSwapRequired = (a: number, b: number): number => {
  let count = 0

  for (let c = a ^ b; c !== 0; c >>= 1) {
    count += c & 1
  }

  return count
}
