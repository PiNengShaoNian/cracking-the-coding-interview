export const countEval = (s: string, result: boolean): number => {
  let ways = 0
  if (!s) return 0
  if (s.length === 1) !!+s === result ? 1 : 0

  for (let i = 1; i < s.length; i += 2) {
    const op = s[i]
    const left = s.slice(0, i)
    const right = s.slice(i + 1)
    const leftTrue = countEval(left, true)
    const leftFalse = countEval(left, false)
    const rightTrue = countEval(right, true)
    const rightFalse = countEval(right, false)

    let totalTrue = 0
    const total = (leftTrue + leftFalse) * (rightTrue + rightFalse)
    if (op === '|') {
      totalTrue =
        leftTrue * rightFalse + leftFalse * rightTrue + leftTrue * rightTrue
    } else if (op === '^') {
      totalTrue = leftTrue * rightFalse + leftFalse * rightTrue
    } else if (op === '&') {
      totalTrue = leftTrue * rightTrue
    }

    const subways = result ? totalTrue : total - totalTrue
    ways += subways
  }

  return ways
}
