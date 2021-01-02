import { stringCompression } from '../1-6.string-compression'

test('能正确的压缩字符串', () => {
  expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3')

  expect(stringCompression('abc')).toBe('abc')

  expect(stringCompression('aaaabd')).toBe('aaaabd')
})
