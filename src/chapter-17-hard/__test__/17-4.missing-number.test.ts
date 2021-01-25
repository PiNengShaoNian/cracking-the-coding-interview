import { BitInteger, findMissing } from '../17-4.missing-number'

test('能找到正确的缺失数字', () => {
  const arr: BitInteger[] = []
  for (let i = 0; i < 1000; ++i) {
    if (i !== 666) arr.push(new BitInteger(i))
  }

  expect(findMissing(arr)).toBe(666)
})
