import { getValidT9Words } from '../16-20.t9'

test('能求出正确的T9单词', () => {
  expect(getValidT9Words('8733', ['tree', 'used', '666', 'trap'])).toEqual([
    'tree',
    'used',
  ])
})
