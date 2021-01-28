import { longestWord } from '../17-15.longest-word'

test('能找出最长的单词', () => {
  const words = ['cat', 'banana', 'dog', 'nana', 'walk', 'walker', 'dogwalker']
  const words1 = [
    'ge',
    'bi',
    'lao',
    'wang',
    'lubenweiniubi',
    'lubenwei',
    'gebilaowang',
  ]
  expect(longestWord(words)).toBe('dogwalker')
  expect(longestWord(words1)).toBe('gebilaowang')
})
