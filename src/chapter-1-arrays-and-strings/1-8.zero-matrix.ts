export const setZeros = (matrix: number[][]): number[][] => {
  if (!matrix.length) return matrix

  let rowHasZero = false
  let columnHasZero = false
  const rows = matrix.length
  const columns = matrix[0].length

  const nullifyRow = (rowIndex: number): void => {
    for (let i = 0; i < columns; ++i) {
      matrix[rowIndex][i] = 0
    }
  }

  const nullifyColumn = (columnIndex: number): void => {
    for (let i = 0; i < rows; ++i) {
      matrix[i][columnIndex] = 0
    }
  }

  for (let i = 0; i < columns; ++i) {
    if (matrix[0][i] === 0) {
      rowHasZero = true
      break
    }
  }

  for (let i = 0; i < rows; ++i) {
    if (matrix[i][0] === 0) {
      columnHasZero = true
      break
    }
  }

  for (let i = 1; i < rows; ++i) {
    for (let j = 1; j < columns; ++j) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let row = 1; row < rows; ++row) {
    if (matrix[row][0] === 0) {
      nullifyRow(row)
    }
  }

  for (let column = 1; column < columns; ++column) {
    if (matrix[0][column] === 0) {
      nullifyColumn(column)
    }
  }

  if (rowHasZero) {
    nullifyRow(0)
  }

  if (columnHasZero) {
    nullifyColumn(0)
  }
  return matrix
}
