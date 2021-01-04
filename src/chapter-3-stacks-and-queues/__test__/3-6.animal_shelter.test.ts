import { AnimalShelter } from '../3-6.animal_shelter'

test('AnimalShelter正常工作', () => {
  const as = new AnimalShelter()

  as.enqueue('DOG', 'dog1')
  as.enqueue('DOG', 'dog2')
  as.enqueue('DOG', 'dog3')

  expect(as.dequeueAny()).toBe('dog1')
  expect(as.dequeueAny()).toBe('dog2')
  expect(as.dequeueAny()).toBe('dog3')

  as.enqueue('DOG', 'dog1')
  as.enqueue('DOG', 'dog2')
  as.enqueue('DOG', 'dog3')
  as.enqueue('CAT', 'cat1')
  as.enqueue('CAT', 'cat2')
  as.enqueue('CAT', 'cat3')
  as.enqueue('DOG', 'dog4')

  expect(as.dequeueAny()).toBe('dog1')
  expect(as.dequeueAny()).toBe('dog2')
  expect(as.dequeueDog()).toBe('dog3')

  expect(as.dequeueAny()).toBe('cat1')
  expect(as.dequeueDog()).toBe('dog4')
  expect(as.dequeueAny()).toBe('cat2')
  expect(as.dequeueCat()).toBe('cat3')
})
