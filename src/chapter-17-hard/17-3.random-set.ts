import { uniform } from '../util/uniform'

export const pickM = <T>(original: T[], m: number): T[] => {
  if (m > original.length) throw new Error('Invalid input')

  const subset: T[] = []

  for (let i = 0; i < m; ++i) {
    subset[i] = original[i]
  }

  for (let i = m; i < original.length; ++i) {
    const rand = uniform(0, i + 1)

    if (rand < m) {
      subset[rand] = original[i]
    }
  }

  return subset
}
