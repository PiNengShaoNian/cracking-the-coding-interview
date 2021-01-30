import { maxRectangle } from '../17-25.max-rectangle'

test('能求出最大单词矩阵', () => {
  const words = ['this', 'real', 'hard', 'trh', 'hea', 'iar', 'sld']

  expect(maxRectangle(words)).toEqual(['this', 'real', 'hard'])
  expect(maxRectangle(['aa'])).toEqual(['aa', 'aa'])
})
