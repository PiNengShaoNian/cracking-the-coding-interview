export const getPondSize = (grid: number[][]): number[] => {
  if (!grid.length) return []
  let res: number[] = []
  let pondId = 0
  const rows = grid.length
  const columns = grid[0].length
  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ]
  const dfs = (row: number, column: number): void => {
    if (res[pondId] === undefined) res[pondId] = 0
    ++res[pondId]

    for (const [rowOffset, colOffset] of directions) {
      const newRow = row + rowOffset
      const newCol = column + colOffset

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < columns &&
        grid[newRow][newCol] === 0
      ) {
        grid[newRow][newCol] = -1
        dfs(newRow, newCol)
      }
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (grid[i][j] === 0) {
        grid[i][j] = -1
        dfs(i, j)
        ++pondId
      }
    }
  }

  return res
}
