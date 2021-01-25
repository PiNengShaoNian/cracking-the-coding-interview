import { uniform } from '../util/uniform'

const exch = (i: number, j: number, arr: any[]): void => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export const shuffle = (arr: any[]): void => {
  for (let i = 0; i < arr.length; ++i) {
    const index = uniform(i, arr.length)
    exch(i, index, arr)
  }
}
