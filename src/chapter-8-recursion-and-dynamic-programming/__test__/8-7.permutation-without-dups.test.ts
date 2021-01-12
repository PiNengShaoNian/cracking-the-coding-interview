import {
  permutation,
  permutation1,
  permutation3,
} from '../8-7.permutation-without-dups'

test('能正确的求出组合', () => {
  expect(permutation('ab')).toEqual(['ab', 'ba'])
  expect(permutation('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])

  expect(permutation1('ab')).toEqual(['ab', 'ba'])
  expect(permutation1('abc')).toEqual([
    'abc',
    'bac',
    'bca',
    'acb',
    'cab',
    'cba',
  ])

  expect(permutation3('ab')).toEqual(['ab', 'ba'])
  expect(permutation3('abc')).toEqual([
    'abc',
    'acb',
    'bac',
    'bca',
    'cab',
    'cba',
  ])
})
