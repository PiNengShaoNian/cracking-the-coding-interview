import { isUnique, isUnique1 } from '../1-1.is-unique'

test('能判断字符串是否有重复字符', () => {
  expect(isUnique('abcdef')).toBeTruthy()
  expect(isUnique('')).toBeTruthy()
  expect(isUnique('a')).toBeTruthy()
  expect(isUnique('aa')).toBeFalsy()
  expect(isUnique('abca')).toBeFalsy()
  
  expect(isUnique1('abcdef')).toBeTruthy()
  expect(isUnique1('')).toBeTruthy()
  expect(isUnique1('a')).toBeTruthy()
  expect(isUnique1('aa')).toBeFalsy()
  expect(isUnique1('abca')).toBeFalsy()
})
