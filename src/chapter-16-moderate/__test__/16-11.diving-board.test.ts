import { allLengths, allLengths1, allLengths2 } from '../16-11.diving-board'

test('能获得所有长度', () => {
  expect(allLengths(6, 66, 10).length).toBe(allLengths1(6, 66, 10).length)
  expect(allLengths1(6, 66, 10).length).toBe(allLengths2(6, 66, 10).length)
})
