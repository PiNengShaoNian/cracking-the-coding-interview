import { isSubString } from '../1-9.string-rotation'

test('能正确识别出旋转字符串', () => {
  expect(isSubString('waterbottle', 'erbottlewat')).toBeTruthy()
})
