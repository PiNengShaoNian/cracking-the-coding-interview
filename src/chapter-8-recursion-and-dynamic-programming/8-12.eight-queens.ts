export const solveNQueens = (n: number): string[][] => {
  const result: string[][] = []

  const column: boolean[] = []
  const dia1: boolean[] = []
  const dia2: boolean[] = []

  const generateBoard = (placement: number[]): string[] => {
    const result: string[] = []
    for (let i = 0; i < n; ++i) {
      const stringArr = new Array(n).fill('X')
      stringArr[placement[i]] = 'Q'
      result.push(stringArr.join(''))
    }

    return result
  }

  const core = (n: number, index: number, placement: number[]): void => {
    if (index === n) {
      result.push(generateBoard(placement))
      return
    }

    for (let i = 0; i < n; ++i) {
      if (!column[i] && !dia1[i + index] && !dia2[index - i + n - 1]) {
        column[i] = true
        dia1[i + index] = true
        dia2[index - i + n - 1] = true
        placement.push(i)

        core(n, index + 1, placement)

        column[i] = false
        dia1[i + index] = false
        dia2[index - i + n - 1] = false
        placement.pop()
      }
    }
  }

  core(n, 0, [])

  return result
}
