export const getSmallestDifference = (
  arr1: number[],
  arr2: number[]
): number => {
  if (!arr1.length || !arr2.length) return Infinity
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  let result = Infinity

  let a = 0
  let b = 0

  while (a < arr1.length && b < arr2.length) {
    const diff = Math.abs(arr1[a] - arr2[b])
    if (diff < result) result = diff

    if (arr1[a] < arr2[b]) ++a
    else ++b
  }

  return result
}
