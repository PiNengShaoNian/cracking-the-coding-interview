export const getKthMagicNumber = (k: number): number => {
  const dp: number[] = []
  dp[0] = 1
  let i3 = 0
  let i5 = 0
  let i7 = 0
  let nextNumberIndex = 1

  while (nextNumberIndex < k) {
    const min = Math.min(3 * dp[i3], Math.min(5 * dp[i5], 7 * dp[i7]))

    if (3 * dp[i3] === min) ++i3
    if (5 * dp[i5] === min) ++i5
    if (7 * dp[i7] === min) ++i7

    dp[nextNumberIndex] = min
    ++nextNumberIndex
  }

  return dp[k - 1]
}
