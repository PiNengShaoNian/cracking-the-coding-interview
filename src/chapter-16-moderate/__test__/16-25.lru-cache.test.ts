import { Cache } from '../16-25.lru-cache'

test('Cache能正常工作', () => {
  const cache = new Cache(3)

  cache.set(0, 0)
  cache.set(1, 1)
  cache.set(2, 2)
  cache.set(3, 3)
  cache.set(4, 4)

  expect(cache.get(0)).toBeNull()
  expect(cache.get(1)).toBeNull()
  expect(cache.get(2)).toBe(2)
  expect(cache.get(3)).toBe(3)
  expect(cache.get(4)).toBe(4)
  cache.set(5, 5)

  expect(cache.get(2)).toBeNull()
  cache.get(3)
  cache.set(6, 6)
  expect(cache.get(4)).toBeNull()
})
