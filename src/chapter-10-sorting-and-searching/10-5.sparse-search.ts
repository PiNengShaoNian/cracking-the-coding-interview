export const search = (strs: string[], target: string): number => {
  let l = 0
  let r = strs.length - 1

  while (l <= r) {
    const midIndex = l + ((r - l) >> 1)
    const mid = strs[midIndex]

    if (mid === target) return midIndex
    if (!mid) {
      let left: string | undefined
      let leftIndex: number

      for (let i = midIndex - 1; i >= l; --i) {
        if (strs[i]) {
          left = strs[i]
          leftIndex = i
          break
        }
      }

      if (left) {
        if (left === target) return leftIndex!
        if (left > target) {
          r = leftIndex! - 1
          continue
        }
      }

      let right: string | undefined
      let rightIndex: number

      for (let i = midIndex + 1; i <= r; ++i) {
        if (strs[i]) {
          right = strs[i]
          rightIndex = i
          break
        }
      }

      if (right) {
        if (right === target) return rightIndex!

        if (right > target) return -1

        l = rightIndex! + 1
      } else break
    } else if (mid > target) r = midIndex - 1
    else if (mid < target) l = midIndex + 1
  }

  return -1
}
