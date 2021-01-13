export const maxHeight = (
  boxes: [wight: number, height: number, depth: number][]
): number => {
  const memo: number[] = []
  const used: boolean[] = []
  const nextBoxes = (box: [number, number, number]): number[] => {
    const result = []

    for (let i = 0; i < boxes.length; ++i) {
      if (
        !used[i] &&
        boxes[i][0] <= box[0] &&
        boxes[i][1] <= box[1] &&
        boxes[i][2] <= box[2]
      ) {
        result.push(i)
      }
    }

    return result
  }
  let result = 0
  const core = (
    boxes: [number, number, number][],
    index: number,
    memo: number[]
  ): number => {
    if (typeof memo[index] !== 'undefined') return memo[index]
    let result = 0

    used[index] = true
    const next = nextBoxes(boxes[index])
    for (let i = 0; i < next.length; ++i) {
      result = Math.max(result, core(boxes, next[i], memo))
    }

    used[index] = false

    return (memo[index] = result + boxes[index][1])
  }

  for (let i = 0; i < boxes.length; ++i) {
    result = Math.max(result, core(boxes, i, memo))
  }

  return result
}
