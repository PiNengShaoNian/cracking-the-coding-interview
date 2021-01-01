import { urlify } from '../1-3.urlify'

test('能正确的格式化字符串', () => {
  expect(urlify('Mr John Smith    ', 13)).toBe('Mr%20John%20Smith')
})
