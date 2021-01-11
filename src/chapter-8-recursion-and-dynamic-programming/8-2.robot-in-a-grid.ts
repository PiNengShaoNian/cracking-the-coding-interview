export const findPath = (grid: (0 | 1)[][]): [number, number][] => {
  if (!grid.length) return []

  const rows = grid.length
  const columns = grid[0].length
  const memo: boolean[][] = Array.from({ length: rows }, () => [])
  const path: [number, number][] = []
  let answer: [number, number][] = []
  const core = (
    row: number,
    column: number,
    path: [number, number][]
  ): boolean => {
    if (grid[row][column] === 0) return false

    if (row === rows - 1 && column === columns - 1 && grid[row][column] === 1) {
      path.push([row, column])
      answer = [...path]
      return true
    }

    if (typeof memo[row][column] !== 'undefined') return memo[row][column]

    let result = false
    path.push([row, column])
    if (row + 1 < rows) result = core(row + 1, column, path)
    if (column + 1 < columns) {
      if (result == false && core(row, column + 1, path) === false) {
        memo[row][column] = false
      } else {
        memo[row][column] = true
        result = true
      }
    }

    path.pop()
    return result
  }

  core(0, 0, path)

  return answer
}
