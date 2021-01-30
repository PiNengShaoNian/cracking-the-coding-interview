import { transform } from '../17-22.word-transformer'

test('能求出单词变化路径', () => {
  expect(
    transform('DAMP', 'LIKE', ['DAMP', 'LAMP', 'LIMP', 'LIME', 'LIKE'])
  ).toEqual(['DAMP', 'LAMP', 'LIMP', 'LIME', 'LIKE'])

  expect(
    transform('小牛坐飞机', '牛逼上天了', [
      '小牛坐飞机',
      '牛逼上天了',
      '牛牛坐飞机',
      '牛牛坐飞了',
      '牛逼坐飞了',
      '牛逼坐天了',
      '牛逼上天了',
    ])
  ).toEqual([
    '小牛坐飞机',
    '牛牛坐飞机',
    '牛牛坐飞了',
    '牛逼坐飞了',
    '牛逼坐天了',
    '牛逼上天了',
  ])
})
