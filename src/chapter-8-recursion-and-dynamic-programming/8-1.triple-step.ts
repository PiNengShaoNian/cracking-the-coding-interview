export const countWays1 = (n: number): number => {
  const memo: number[] = []

  const core = (n: number): number => {
    if (n < 0) return 0
    if (n === 0) return 1

    if (memo[n] !== undefined) return memo[n]

    const n1 = core(n - 1)
    const n2 = core(n - 2)
    const n3 = core(n - 3)

    return (memo[n] = n1 + n2 + n3)
  }

  return memo[n]
}
