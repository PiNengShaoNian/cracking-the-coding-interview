import { search } from '../10-5.sparse-search'

test('能获得正确的下标', () => {
  const test = ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '']

  expect(search(test, 'ball')).toBe(4)
  expect(search(test, 'at')).toBe(0)
  expect(search(test, 'car')).toBe(7)
  expect(search(test, '666')).toBe(-1)
})
