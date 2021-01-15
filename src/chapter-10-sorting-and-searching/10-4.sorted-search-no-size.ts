export class Listy {
  constructor(private data: number[]) {}

  elmentAt(i: number): number {
    if (i >= this.data.length) return -1

    return this.data[i]
  }
}

export const search = (listy: Listy, target: number): number => {
  let l = 0
  let r = Number.MAX_SAFE_INTEGER

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)

    const ele = listy.elmentAt(mid)

    if (ele === target) return mid
    else if (ele === -1 || ele > target) {
      r = mid - 1
    } else if (ele < target) {
      l = mid + 1
    }
  }

  return -1
}
