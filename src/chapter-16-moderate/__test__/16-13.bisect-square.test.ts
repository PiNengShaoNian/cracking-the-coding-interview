import { Square } from '../16-13.bisect-square'

test('能正确求出直线', () => {
  const square1 = new Square(0, 0, 4)
  const square2 = new Square(2, 2, 4)
  const square3 = new Square(0, 2, 4)

  const line = square1.cut(square2)
  const line2 = square1.cut(square3)
  expect(line).toEqual([
    [0, 0],
    [6, 6],
  ])

  expect(line2).toEqual([
    [2, 0],
    [2, 6],
  ])
})
