import { isOneAway } from '../1-5.one-away'

test('能正确的超出差别数量', () => {
  expect(isOneAway('pale', 'ple')).toBeTruthy()
  expect(isOneAway('pales', 'pale')).toBeTruthy()
  expect(isOneAway('pale', 'bale')).toBeTruthy()
  expect(isOneAway('pale', 'bake')).toBeFalsy()
  expect(isOneAway('pale', 'paaa')).toBeFalsy()
  expect(isOneAway('pale', 'pece')).toBeFalsy()

  expect(isOneAway('aa', 'abb')).toBeFalsy()
})
