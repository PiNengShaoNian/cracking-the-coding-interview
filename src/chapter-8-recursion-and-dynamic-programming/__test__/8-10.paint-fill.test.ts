import { paintFill } from '../8-10.paint-fill'

test('能正确的填充数组', () => {
  const screen = [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
  ]

  paintFill(screen, [2, 1], 6)

  expect(screen).toEqual([
    [0, 0, 0, 6],
    [0, 0, 6, 6],
    [0, 1, 6, 0],
    [0, 0, 6, 0],
  ])
})
