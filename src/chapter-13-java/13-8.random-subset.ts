export const getRandomSubset = <T>(list: T[]): T[] => {
  const result: T[] = []
  for (let i = 0; i < list.length; ++i) {
    if (Math.random() <= 0.5) {
      result.push(list[i])
    }
  }

  return result
}
