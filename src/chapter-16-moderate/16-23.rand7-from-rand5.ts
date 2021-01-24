import { uniform } from '../util/uniform'

const rand5 = () => {
  return uniform(0, 5)
}

export const rand7 = (): number => {
  while (true) {
    const num = 5 * rand5() + rand5()

    if (num < 21) {
      return num % 7
    }
  }
}
