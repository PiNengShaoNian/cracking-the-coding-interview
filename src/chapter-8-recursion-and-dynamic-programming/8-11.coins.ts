export const getConinsCombination = (n: number): number => {
  const coins = [1, 5, 10, 25]
  const memo: number[][] = Array.from({ length: coins.length }, () => [])

  const core = (
    n: number,
    start: number,
    coins: number[],
    memo: number[][]
  ): number => {
    if (n < 0) return 0
    if (n === 0) return 1
    if (start >= coins.length) return 0

    if (typeof memo[start][n] === 'number') return memo[start][n]
    let result = 0

    for (let i = 0; i * coins[start] <= n; ++i) {
      result += core(n - i * coins[start], start + 1, coins, memo)
    }

    return (memo[start][n] = result)
  }

  return core(n, 0, coins, memo)
}
