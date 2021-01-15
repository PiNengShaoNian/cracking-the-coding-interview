import { search, Listy } from '../10-4.sorted-search-no-size'

test('能获得正确的下标', () => {
  const test = new Listy(Array.from({ length: 1000 }, (_, i) => i))

  expect(search(test, 1000)).toBe(-1)
  expect(search(test, 500)).toBe(500)
  expect(search(test, 3)).toBe(3)
})
