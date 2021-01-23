const binarySearch = (target: number, nums: number[]): boolean => {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = l + ((r - l) >> 1)

    if (nums[mid] === target) return true
    else if (nums[mid] < target) l = mid
    else r = mid
  }

  return false
}

export const swap = (arr1: number[], arr2: number[]): [number, number] => {
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < arr1.length; ++i) {
    sum1 += arr1[i]
  }

  for (let i = 0; i < arr2.length; ++i) {
    sum2 += arr2[i]
  }
  if (sum1 === sum2) return [-1, -1]

  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  let biggerArr: number[] = sum1 > sum2 ? arr1 : arr2
  let smallerArr: number[] = sum1 > sum2 ? arr2 : arr1

  const diff = Math.abs(sum1 - sum2) >> 1
  for (let i = 0; i < smallerArr.length; ++i) {
    if (binarySearch(smallerArr[i] + diff, biggerArr))
      return [smallerArr[i], smallerArr[i] + diff]
  }

  return [-1, -1]
}
