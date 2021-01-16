export const findElement = (matrix: number[][], target: number): boolean => {
  if (!matrix.length) return false
  let rowIndex = 0
  let columnIndex = matrix[0].length - 1

  while (rowIndex < matrix.length && columnIndex >= 0) {
    const ele = matrix[rowIndex][columnIndex]

    if (ele === target) return true
    else if (ele > target) --columnIndex
    else {
      ++rowIndex
    }
  }

  return false
}
