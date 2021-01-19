class Line {
  public slope: number
  public yintercept: number

  constructor(start: [number, number], end: [number, number]) {
    const xDelta = start[0] - end[0]
    const yDelta = start[1] - end[1]

    this.slope = yDelta / xDelta

    this.yintercept = end[1] - this.slope * end[0]
  }
}

const isBetween = (
  start: [number, number],
  middle: [number, number],
  end: [number, number]
): boolean => {
  const _isBetween = (a: number, b: number, c: number): boolean => {
    if (a > c) {
      return b >= c && b <= a
    } else return b >= a && b <= c
  }

  return (
    _isBetween(start[0], middle[0], end[0]) &&
    _isBetween(start[1], middle[1], end[1])
  )
}

export const intersection = (
  start1: [number, number],
  end1: [number, number],
  start2: [number, number],
  end2: [number, number]
): [number, number] | null => {
  if (start1[0] > end1[0]) {
    ;[start1, end1] = [end1, start1]
  }
  if (start2[0] > end2[0]) {
    ;[start2, end2] = [end2, start2]
  }

  if (start1[0] > start2[0]) {
    ;[start1, start2] = [start2, start1]
    ;[end1, end2] = [end2, end1]
  }

  const line1 = new Line(start1, end1)
  const line2 = new Line(start2, end2)

  if (line1.slope === line2.slope) {
    if (isBetween(start1, start2, end1)) {
      return start2
    }

    return null
  }

  const x = (line2.yintercept - line1.yintercept) / (line1.slope - line2.slope)
  const y = line1.slope * x + line1.yintercept
  const point: [number, number] = [x, y]
  if (isBetween(start1, point, end1) && isBetween(start2, point, end2)) {
    return point
  }

  return null
}
