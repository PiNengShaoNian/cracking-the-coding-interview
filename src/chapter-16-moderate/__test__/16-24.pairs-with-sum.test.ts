import { getPairs } from '../16-24.pairs-with-sum'

test('能正确地找到所有的数字对', () => {
  const nums = [1, 9, 2, 3, 7, 8, -1, 5, 5, 11, 666, 223]

  const pairs = getPairs(10, nums)

  expect(pairs).toHaveLength(5)

  for (let i = 0; i < pairs.length; ++i) {
    expect(pairs[i][0] + pairs[i][1]).toBe(10)
  }
})
