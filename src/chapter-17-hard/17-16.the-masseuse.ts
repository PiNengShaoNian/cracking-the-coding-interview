export const maxMinutes = (appointments: number[]): number => {
  const memo: number[] = []
  const core = (
    index: number,
    memo: number[],
    appointments: number[]
  ): number => {
    if (index >= appointments.length) return 0
    if (typeof memo[index] === 'number') return memo[index]

    const bestWith = appointments[index] + core(index + 2, memo, appointments)
    const bestWithout = core(index + 1, memo, appointments)

    return (memo[index] = Math.max(bestWith, bestWithout))
  }

  return core(0, memo, appointments)
}
