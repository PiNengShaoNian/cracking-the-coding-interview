import { estimate } from '../16-15.master-mind'

test('能正确地算出估计结果', () => {
  expect(estimate('RGBY', 'GGRR')).toEqual([1, 1])
  expect(estimate('RRRR', 'RRRR')).toEqual([4, 0])
  expect(estimate('RGBY', 'YBGR')).toEqual([0, 4])
})
