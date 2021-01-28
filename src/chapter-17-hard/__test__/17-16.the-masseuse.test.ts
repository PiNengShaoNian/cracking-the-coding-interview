import { maxMinutes } from '../17-16.the-masseuse'

test('能求出最大时长', () => {
  expect(maxMinutes([30, 15, 60, 75, 45, 15, 15, 45])).toBe(180)
})
