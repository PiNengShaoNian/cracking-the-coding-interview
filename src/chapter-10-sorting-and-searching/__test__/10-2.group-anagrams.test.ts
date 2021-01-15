import { groupAnagrams, hash } from '../10-2.group-anagrams'

test('能正确地排序异位词', () => {
  const test = [
    'tar',
    'arc',
    'elbow',
    'state',
    'cider',
    'dusty',
    'night',
    'inch',
    'rat',
    'car',
    'below',
    'taste',
    'cried',
    'study',
    'thing',
    'chin',
  ]

  groupAnagrams(test)

  for (let i = 0; i < test.length; i += 2) {
    expect(hash(test[i], test.length * 8)).toBe(
      hash(test[i + 1], test.length * 8)
    )
  }
})
