import { searchAll } from '../17-17.multile-search'

test('能求出小串的下标', () => {
  const big = 'mississippi'
  const smalls = ['is', 'ppi', 'hi', 'sis', 'i', 'ssippi']

  expect(searchAll(big, smalls)).toEqual({
    is: [4, 1],
    ppi: [8],
    hi: [],
    sis: [3],
    i: [10, 7, 4, 1],
    ssippi: [5],
  })
})
