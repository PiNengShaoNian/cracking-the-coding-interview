import { nameFrequencies } from '../17-7.baby-names'

test('能获得正确的名字频率', () => {
  expect(
    nameFrequencies(
      [
        ['John', 15],
        ['Jon', 12],
        ['Chris', 13],
        ['Kris', 4],
        ['Christopher', 19],
        ['LaoWang', 5],
        ['WangGeBi', 5],
        ['GeBiLaoWang', 5],
      ],
      [
        ['Jon', 'John'],
        ['John', 'Johnny'],
        ['Chris', 'Kris'],
        ['Chris', 'Christopher'],
        ['LaoWang', 'WangGeBi'],
        ['WangGeBi', 'GeBiLaoWang'],
      ]
    )
  ).toEqual([
    ['John', 27],
    ['Chris', 36],
    ['LaoWang', 15],
  ])
})
