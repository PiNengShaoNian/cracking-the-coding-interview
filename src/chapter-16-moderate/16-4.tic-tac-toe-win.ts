export const hasWon = (board: (0 | 1 | 2)[][]): 0 | 1 | 2 => {
  if (!board.length) return 0
  const rows = board.length
  const columns = board[0].length

  if (rows !== columns) return 0

  for (let i = 0; i < rows; ++i) {
    const first = board[i][0]

    if (first === 0) continue

    for (let j = 1; j < columns; ++j) {
      if (board[i][j] !== first) break
      else if (j === columns - 1) return first
    }
  }

  for (let i = 0; i < rows; ++i) {
    const first = board[0][i]

    if (first === 0) continue

    for (let j = 1; j < rows; ++j) {
      if (board[j][i] !== first) break
      else if (j === rows - 1) return first
    }
  }

  let first = board[0][0]
  if (first !== 0) {
    for (let i = 1; i < rows; ++i) {
      if (board[i][i] !== first) break
      else if (i === rows - 1) return first
    }
  }

  first = board[0][columns - 1]

  if (first !== 0) {
    for (let i = 1; i < rows; ++i) {
      if (board[i][rows - i - 1] !== first) break
      else if (i === rows - 1) return first
    }
  }

  return 0
}
