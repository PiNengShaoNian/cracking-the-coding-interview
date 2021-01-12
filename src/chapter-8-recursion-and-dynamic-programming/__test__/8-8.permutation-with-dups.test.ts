import { permutation } from '../8-8.permutation-with-dups'

test('能求出还有重复字符的排列组合', () => {
  expect(permutation('ab')).toEqual(['ab', 'ba'])
  expect(permutation('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])

  expect(permutation('aab')).toEqual(['aab', 'aba', 'baa'])
})
