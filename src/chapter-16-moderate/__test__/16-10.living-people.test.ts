import { maxAliveYear1, maxAliveYear2 } from '../16-10.living-people'

test('能算出那年活的人最多', () => {
  const years: [number, number][] = [
    [12, 15],
    [20, 90],
    [10, 98],
    [1, 72],
    [10, 98],
    [23, 82],
    [13, 98],
    [90, 98],
    [83, 99],
    [75, 94],
  ]

  years.forEach((v) => {
    v[0] += 1900
    v[1] += 1900
  })

  expect(maxAliveYear1(years, 1900, 2000)).toBe(
    maxAliveYear2(years, 1900, 2000)
  )
})
