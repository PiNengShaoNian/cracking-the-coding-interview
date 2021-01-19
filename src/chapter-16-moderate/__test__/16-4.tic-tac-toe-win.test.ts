import { hasWon } from '../16-4.tic-tac-toe-win'

test('能正确的检测出谁赢', () => {
  const board1: (0 | 1 | 2)[][] = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ]

  const board2: (0 | 1 | 2)[][] = [
    [1, 0, 0],
    [0, 1, 1],
    [0, 0, 1],
  ]

  const board3: (0 | 1 | 2)[][] = [
    [1, 0, 0],
    [0, 1, 1],
    [0, 0, 0],
  ]

  const board4: (0 | 1 | 2)[][] = [
    [1, 0, 2],
    [0, 2, 1],
    [2, 0, 0],
  ]

  expect(hasWon(board1)).toBe(1)
  expect(hasWon(board2)).toBe(1)
  expect(hasWon(board3)).toBe(0)
  expect(hasWon(board4)).toBe(2)
})
