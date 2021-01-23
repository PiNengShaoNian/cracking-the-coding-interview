import { doesMatch } from '../16-18.pattern-matcher'

test('能正确地识别字符串', () => {
  const str = 'catcatgocatgo'

  expect(doesMatch('aabab', str)).toBeTruthy()
  expect(doesMatch('ab', str)).toBeTruthy()
  expect(doesMatch('ba', str)).toBeTruthy()
  expect(doesMatch('a', str)).toBeTruthy()
  expect(doesMatch('aaa', str)).toBeFalsy()
})
