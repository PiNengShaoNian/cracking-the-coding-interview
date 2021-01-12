import { getPowerSet, getSubsets } from '../8-4.power-set'

test('能正确地获得全部子集', () => {
  expect(getPowerSet([1, 2])).toEqual([[1, 2], [1], [2], []])
  expect(getSubsets([1, 2], 0)).toEqual([[], [2], [1], [2, 1]])
})
