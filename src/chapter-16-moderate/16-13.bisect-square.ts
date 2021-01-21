export class Square {
  public right: number
  public bottom: number
  constructor(public left: number, public top: number, public size: number) {
    this.right = left + size
    this.bottom = top + size
  }

  middle(): [number, number] {
    return [(this.right + this.left) / 2, (this.top + this.bottom) / 2]
  }

  private extend(
    mid1: [number, number],
    mid2: [number, number],
    size: number
  ): [number, number] {
    const xdir = mid1[0] < mid2[0] ? -1 : 1
    const ydir = mid1[1] < mid2[1] ? -1 : 1

    if (mid1[0] === mid2[0]) {
      return [mid1[0], mid1[1] + (size / 2) * ydir]
    }

    const slope = (mid1[1] - mid2[1]) / (mid1[0] - mid2[0])
    let x1: number
    let y1: number
    if (Math.abs(slope) === 1) {
      x1 = mid1[0] + (size / 2) * xdir
      y1 = mid1[1] + (size / 2) * ydir
    } else if (Math.abs(slope) < 1) {
      x1 = mid1[0] + (size / 2) * xdir
      y1 = mid1[1] + (x1 - mid1[0]) * slope
    } else {
      y1 = mid1[1] + (size / 2) * ydir
      x1 = (y1 - mid1[1]) / slope + mid1[0]
    }

    return [x1, y1]
  }

  cut(other: Square): [[number, number], [number, number]] {
    const p1 = this.extend(this.middle(), other.middle(), this.size)
    const p2 = this.extend(this.middle(), other.middle(), -this.size)
    const p3 = this.extend(other.middle(), this.middle(), this.size)
    const p4 = this.extend(other.middle(), this.middle(), -this.size)

    let start = p1
    let end = p1
    const points = [p2, p3, p4]

    for (let i = 0; i < points.length; ++i) {
      if (
        points[i][0] < start[0] ||
        (points[i][0] === start[0] && points[i][1] < start[1])
      ) {
        start = points[i]
      } else if (
        points[i][0] > end[0] ||
        (points[i][0] === end[0] && points[i][1] > end[1])
      ) {
        end = points[i]
      }
    }

    return [start, end]
  }
}
