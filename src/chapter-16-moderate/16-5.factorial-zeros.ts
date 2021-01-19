export const countFactZeros = (n: number): number => {
  if (n < 0) return -1
  let count = 0

  for (let i = 5; (n / i) >> 0 > 0; i *= 5) {
    count += (n / i) >> 0
  }

  return count
}

const factorsOf5 = (num: number): number => {
  let count = 0

  while (num % 5 === 0) {
    ++count
    num /= 5
  }

  return count
}

export const countFactZeros1 = (n: number): number => {
  let count = 0
  for (let i = 5; i <= n; ++i) {
    count += factorsOf5(i)
  }

  return count
}
