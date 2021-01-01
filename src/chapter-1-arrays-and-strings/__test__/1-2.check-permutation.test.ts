import { arePermutation } from '../1-2.check-permutation'

test('能识别出字符串的重排列', () => {
  expect(arePermutation('', '')).toBeTruthy()
  expect(arePermutation('aaa', 'aaa')).toBeTruthy()
  expect(arePermutation('abc', 'cab')).toBeTruthy()

  expect(arePermutation('ab', 'ca')).toBeFalsy()
  expect(arePermutation('ab', 'a')).toBeFalsy()
  expect(arePermutation('fff', 'ffc')).toBeFalsy()
})
