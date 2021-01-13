import { solveNQueens } from '../8-12.eight-queens'

test('能求出八皇后的解', () => {
  expect(solveNQueens(8)).toHaveLength(92)
})
