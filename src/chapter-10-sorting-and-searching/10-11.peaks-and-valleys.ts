export const sortValleyPeak = (array: number[]): void => {
  array.sort((a, b) => a - b)
  for (let i = 1; i < array.length; i += 2) {
    swap(array, i - 1, i)
  }
}

export const swap = (array: number[], left: number, right: number): void => {
  const temp = array[left]
  array[left] = array[right]
  array[right] = temp
}
