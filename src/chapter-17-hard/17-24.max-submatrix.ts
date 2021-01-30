const computeMatrixSum = (
  processed: number[][],
  row: number,
  col: number,
  width: number,
  height: number
): number => {
  const sumTopLeft = processed[row][col]
  const sumTopRight =
    col + width < processed.length ? processed[row][col + width] : 0
  const sumBottomLeft =
    row + height < processed.length ? processed[row + height][col] : 0
  const sumOverlapped =
    row + height < processed.length && col + width < processed.length
      ? processed[row + height][col + width]
      : 0

  return sumTopLeft - sumTopRight - sumBottomLeft + sumOverlapped
}

const processMatrix = (matrix: number[][]): number[][] => {
  let result: number[][] = Array.from({ length: matrix.length }, () => [])

  for (let row = matrix.length - 1; row >= 0; --row) {
    for (let col = matrix.length - 1; col >= 0; --col) {
      let sumRight = 0
      let sumBelow = 0
      let sumOverlapped = 0

      if (row + 1 < matrix.length) {
        sumBelow = result[row + 1][col]
      }

      if (col + 1 < matrix.length) {
        sumRight = result[row][col + 1]
      }

      if (row + 1 < matrix.length && col + 1 < matrix.length) {
        sumOverlapped = result[row + 1][col + 1]
      }

      result[row][col] = matrix[row][col] + sumRight + sumBelow - sumOverlapped
    }
  }

  return result
}

export const findMatrix = (
  matrix: number[][]
): [row: number, col: number, width: number, height: number] => {
  let sum = 0
  let result: [number, number, number, number] = [0, 0, 0, 0]
  //processed[row][col]
  //代表以(row,col)为左上角，
  //以(matrix.length-1,matri.length-1)为右下角所构成矩阵的和
  const processed = processMatrix(matrix)

  for (let row = 0; row < matrix.length; ++row) {
    for (let col = 0; col < matrix.length; ++col) {
      for (let width = 1; col + width - 1 < matrix.length; ++width) {
        for (let height = 1; height + row - 1 < matrix.length; ++height) {
          const matrixSum = computeMatrixSum(processed, row, col, width, height)
          if (matrixSum > sum) {
            result = [row, col, width, height]
            sum = matrixSum
          }
        }
      }
    }
  }

  return result
}

const maxSubArray = (arr: number[]): [number, number, number] => {
  let best: [number, number, number] = [0, 0, -Infinity]
  let sum = 0
  let start = 0
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i]

    if (sum > best[2]) {
      best = [start, i, sum]
    }

    if (sum < 0) {
      sum = 0
      start = i + 1
    }
  }

  return best
}

export const getMaxMatrix = (
  matrix: number[][]
): [rowStart: number, rowEnd: number, colStart: number, colEnd: number] => {
  let rowCount = matrix.length
  let colCount = matrix[0].length

  let maxSum = -Infinity
  let result: [number, number, number, number] = [-1, -1, -1, -1]
  for (let rowStart = 0; rowStart < rowCount; ++rowStart) {
    const partialSum: number[] = Array.from({ length: colCount }, () => 0)

    for (let rowEnd = rowStart; rowEnd < rowCount; ++rowEnd) {
      for (let i = 0; i < colCount; ++i) {
        partialSum[i] += matrix[rowEnd][i]
      }

      const [colStart, colEnd, sum] = maxSubArray(partialSum)

      if (sum > maxSum) {
        maxSum = sum
        result = [rowStart, rowEnd, colStart, colEnd]
      }
    }
  }

  return result
}
