export function getBestLine(points: number[][]): number[][] {
  if (!points.length) return []
  const gcd = (a: number, b: number): number => {
    if (b === 0) return a

    return gcd(b, a % b)
  }

  const maxPointsOnALineContainingPointI = (
    i: number
  ): [number, number[] | null] => {
    let count = 1
    let duplicates = 0
    let horisontal_lines = 1

    const map = new Map<string, number>()
    let endPoint: number[] | null = null

    const [x1, y1] = points[i]
    for (let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j]

      if (x1 === x2 && y1 === y2) duplicates++
      else if (y1 === y2) {
        horisontal_lines++
        if (horisontal_lines > count) {
          count = horisontal_lines
          endPoint = points[j]
        }
      } else {
        const xDiff = x1 - x2
        const yDiff = y1 - y2
        const divisor = gcd(xDiff, yDiff)
        const slope = [xDiff / divisor, yDiff / divisor].join('/')

        map.set(slope, (map.get(slope) || 1) + 1)
        if (map.get(slope)! > count) {
          count = map.get(slope)!
          endPoint = points[j]
        }
      }
    }

    return [count + duplicates, endPoint]
  }

  let maxPointCount = 1
  let result: number[][]
  for (let i = 0; i < points.length - 1; i++) {
    const [count, endPoint] = maxPointsOnALineContainingPointI(i)
    if (count > maxPointCount) {
      maxPointCount = count
      if (endPoint) result = [points[i], endPoint]
    }
  }

  return result! ?? []
}
