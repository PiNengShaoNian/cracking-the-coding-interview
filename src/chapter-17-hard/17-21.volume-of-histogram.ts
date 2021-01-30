const findIndexOfMax = (
  start: number,
  end: number,
  histogram: number[]
): number => {
  let maxHeight = -Infinity
  let maxIndex = -1
  for (let i = start; i <= end; ++i) {
    if (histogram[i] > maxHeight) {
      maxHeight = histogram[i]
      maxIndex = i
    }
  }
  return maxIndex
}

const borderedVolume = (
  start: number,
  end: number,
  histogramData: [number, number, number][]
): number => {
  if (start >= end) return 0

  const min = Math.min(histogramData[start][0], histogramData[end][0])
  let result = 0
  for (let i = start + 1; i < end; ++i) {
    result += min - histogramData[i][0]
  }

  return result
}

const subgraphVolume = (
  start: number,
  end: number,
  histogramData: [number, number, number][],
  isLeft: boolean
): number => {
  if (start >= end) return 0

  let result = 0
  if (isLeft) {
    const max = histogramData[end - 1][1]
    result += borderedVolume(max, end, histogramData)

    result += subgraphVolume(start, max, histogramData, isLeft)
  } else {
    const max = histogramData[start + 1][2]

    result += borderedVolume(start, max, histogramData)
    result += subgraphVolume(max, end, histogramData, isLeft)
  }

  return result
}

export const createHistogramData = (
  histogram: number[]
): [height: number, leftMaxIndex: number, rightMaxIndex: number][] => {
  const result: [number, number, number][] = Array.from(
    { length: histogram.length },
    () => [-1, -1, -1]
  )

  let maxIndex = 0
  for (let i = 0; i < histogram.length; ++i) {
    if (histogram[maxIndex] < histogram[i]) {
      maxIndex = i
    }

    result[i][0] = histogram[i]
    result[i][1] = maxIndex
  }

  maxIndex = histogram.length - 1

  for (let i = histogram.length - 1; i >= 0; --i) {
    if (histogram[maxIndex] < histogram[i]) {
      maxIndex = i
    }

    result[i][2] = maxIndex
  }

  return result
}

export const computeVolumeOfHistogram = (histogram: number[]): number => {
  const start = 0
  const end = histogram.length - 1

  const histogramData = createHistogramData(histogram)

  const max = histogramData[0][2]

  return (
    subgraphVolume(start, max, histogramData, true) +
    subgraphVolume(max, end, histogramData, false)
  )
}

export const computeVolumeOfHistogram1 = (histogram: number[]): number => {
  const leftMaxes: number[] = []

  let leftMax = histogram[0]

  for (let i = 0; i < histogram.length; ++i) {
    leftMax = Math.max(leftMax, histogram[i])
    leftMaxes[i] = leftMax
  }

  let rightMax = histogram[histogram.length - 1]
  let sum = 0
  for (let i = histogram.length - 1; i >= 0; --i) {
    rightMax = Math.max(rightMax, histogram[i])
    const secondTallest = Math.min(rightMax, leftMaxes[i])

    if (secondTallest > histogram[i]) {
      sum += secondTallest - histogram[i]
    }
  }

  return sum
}
