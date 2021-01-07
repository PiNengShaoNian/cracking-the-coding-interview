import { drawLine } from '../5-8.draw-line'

test('drawline', () => {
  const screen = new Int16Array(6)
  drawLine(screen, 16, 6, 15, 1)
  expect(Array.from(screen)).toEqual([0, 0, 3, 255, 0, 0])
})
