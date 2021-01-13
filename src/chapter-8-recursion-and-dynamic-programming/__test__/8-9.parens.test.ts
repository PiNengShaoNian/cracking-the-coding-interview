import { getParensPermutation } from '../8-9.parens'

test('能得到正确的组合', () => {
  expect(getParensPermutation(2)).toEqual(['()()', '(())'])
  expect(getParensPermutation(3)).toEqual([
    '()()()',
    '(())()',
    '()(())',
    '()(())',
    '((()))',
  ])
})
