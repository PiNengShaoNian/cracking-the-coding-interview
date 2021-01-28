import { split } from '../17-13.re-space'

test('能正确的分割字符串', () => {
  expect(split(new Set(['we']), 'we')).toBe('we')
  expect(split(new Set(['this', 'is', 'awesome']), 'thisisawesome')).toBe(
    'this is awesome'
  )
  expect(
    split(
      new Set(['looked', 'just', 'like', 'her', 'brother']),
      'jesslookedjustliketimherbrother'
    )
  ).toBe('j e s s looked just like t i m her brother')
})
