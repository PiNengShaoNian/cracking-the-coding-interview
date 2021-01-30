export const findSquare = (
  matrix: number[][]
): [row: number, col: number, size: number] | null => {
  const isSqaure = (
    row: number,
    col: number,
    size: number,
    matrix: number[][]
  ): boolean => {
    for (let i = 0; i < size; ++i) {
      if (matrix[row][col + i] === 1) return false

      if (matrix[row + size - 1][col + i] === 1) return false
    }

    for (let i = 0; i < size; ++i) {
      if (matrix[row + i][col] === 1) return false

      if (matrix[row + i][col + size - 1] === 1) return false
    }

    return true
  }

  const findSquareWithSize = (
    matrix: number[][],
    size: number
  ): [number, number, number] | null => {
    const count = matrix.length - size + 1

    for (let row = 0; row < count; ++row) {
      for (let col = 0; col < count; ++col) {
        if (isSqaure(row, col, size, matrix)) return [row, col, size]
      }
    }

    return null
  }
  for (let i = matrix.length; i >= 1; --i) {
    const square = findSquareWithSize(matrix, i)
    if (square) return square
  }

  return null
}
export const findSquare1 = (
  matrix: number[][]
): [row: number, col: number, size: number] | null => {
  const processSquare = (
    matrix: number[][]
  ): [zerosRight: number, zerosBelow: number][][] => {
    const result: [number, number][][] = Array.from(
      { length: matrix.length },
      () => []
    )

    for (let row = matrix.length - 1; row >= 0; --row) {
      for (let col = matrix.length - 1; col >= 0; --col) {
        let zerosRight = 0
        let zerosBelow = 0

        if (matrix[row][col] === 0) {
          ++zerosBelow
          ++zerosRight
          if (row + 1 < matrix.length) {
            zerosBelow += result[row + 1][col][1]
          }

          if (col + 1 < matrix.length) {
            zerosRight += result[row][col + 1][0]
          }
        }

        result[row][col] = [zerosRight, zerosBelow]
      }
    }

    return result
  }

  const isSqaure = (
    row: number,
    col: number,
    size: number,
    processed: [number, number][][]
  ): boolean => {
    const topLeft = processed[row][col]
    const topRight = processed[row][col + size - 1]
    const bottomLeft = processed[row + size - 1][col]

    if (
      topLeft[0] < size ||
      topLeft[1] < size ||
      topRight[1] < size ||
      bottomLeft[0] < size
    )
      return false

    return true
  }

  const findSquareWithSize = (
    processed: [number, number][][],
    size: number
  ): [number, number, number] | null => {
    const count = matrix.length - size + 1

    for (let row = 0; row < count; ++row) {
      for (let col = 0; col < count; ++col) {
        if (isSqaure(row, col, size, processed)) return [row, col, size]
      }
    }

    return null
  }

  const processed = processSquare(matrix)

  for (let i = matrix.length; i >= 1; --i) {
    const square = findSquareWithSize(processed, i)
    if (square) return square
  }

  return null
}
