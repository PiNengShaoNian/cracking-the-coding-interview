export const rotateMatrix = <T>(matrix: T[][]): T[][] => {
  if (!matrix.length) return matrix

  if (matrix.length !== matrix[0].length) throw new Error('Invalid matrix')

  const rows = matrix.length

  let first = 0
  let last = rows - 1

  while (first < last) {
    for (let i = first; i < last; ++i) {
      const offset = i - first
      const temp = matrix[first][i]

      matrix[first][i] = matrix[last - offset][first]
      matrix[last - offset][first] = matrix[last][last - offset]
      matrix[last][last - offset] = matrix[i][last]
      matrix[i][last] = temp
    }

    ++first
    --last
  }

  return matrix
}
