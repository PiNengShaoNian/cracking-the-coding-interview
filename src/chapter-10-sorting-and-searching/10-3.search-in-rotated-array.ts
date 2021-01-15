export const search = (arr: number[], target: number): number => {
  const searchHelper = (
    arr: number[],
    target: number,
    l: number,
    r: number
  ): number => {
    if (l > r) return -1
    const mid = l + ((r - l) >> 1)

    if (arr[mid] === target) return mid

    if (arr[mid] > arr[l]) {
      if (target < arr[mid] && target >= arr[l]) {
        return searchHelper(arr, target, l, mid - 1)
      } else {
        return searchHelper(arr, target, mid + 1, r)
      }
    } else if (arr[mid] < arr[l]) {
      if (target > arr[mid] && target <= arr[r]) {
        return searchHelper(arr, target, mid + 1, r)
      } else {
        return searchHelper(arr, target, l, mid - 1)
      }
    } else if (arr[mid] === arr[l]) {
      if (arr[mid] !== arr[r]) {
        return searchHelper(arr, target, mid + 1, r)
      } else {
        let result = searchHelper(arr, target, l, mid - 1)
        if (result === -1) {
          result = searchHelper(arr, target, mid + 1, r)
        }

        return result
      }
    }

    return -1
  }

  return searchHelper(arr, target, 0, arr.length - 1)
}
