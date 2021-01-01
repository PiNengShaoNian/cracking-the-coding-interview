import { isPermutationOfPallindrome } from '../1-4.pallindrome-permutations'

test('能识别出是否是回文串的一个排列', () => {
  expect(isPermutationOfPallindrome('tact coa')).toBeTruthy()
  expect(isPermutationOfPallindrome('ABBA')).toBeTruthy()
  expect(isPermutationOfPallindrome('ABBB')).toBeFalsy()
})
