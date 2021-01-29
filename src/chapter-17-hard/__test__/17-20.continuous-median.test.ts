import { Median } from '../17-20.continuous-median'

test('能获得序列的中位数', () => {
  const median = new Median()

  expect(median.median()).toBe(-1)

  median.input(1)
  expect(median.median()).toBe(1)

  median.input(2)
  expect(median.median()).toBe(1.5)

  median.input(10)
  expect(median.median()).toBe(2)

  median.input(4)
  expect(median.median()).toBe(3)

  median.input(5)
  expect(median.median()).toBe(4)
})
