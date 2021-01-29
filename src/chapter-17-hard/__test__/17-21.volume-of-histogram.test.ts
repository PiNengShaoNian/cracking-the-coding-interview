import { volumeOfHistogram } from '../17-21.volume-of-histogram'

test('能得出正确的容量', () => {
  const histogram = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0]
  expect(volumeOfHistogram(histogram)).toBe(26)
})
