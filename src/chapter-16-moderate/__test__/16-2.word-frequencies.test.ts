import { createWordFrequenceisFunc } from '../16-2.word-frequencies'

test('能获得正确的频率', () => {
  const txt = '666 666 666 223 666     666'

  const getFre = createWordFrequenceisFunc(txt)

  expect(getFre('666')).toBe(5)
  expect(getFre('223')).toBe(1)
  expect(getFre('2')).toBe(0)
})
