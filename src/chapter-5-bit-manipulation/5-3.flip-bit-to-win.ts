export const filpToWin = (num: number): number => {
  let result = -Infinity
  const bits = num.toString(2)

  for (let i = 0; i < bits.length; ++i) {
    if (bits[i] !== '0') continue

    let leftSize = 0
    let index = i
    while (index - 1 >= 0 && bits[--index] === '1') ++leftSize

    let rightSize = 0
    index = i
    while (index + 1 < bits.length && bits[++index] === '1') ++rightSize

    const size = leftSize + rightSize + 1
    if (result < size) result = size
  }

  return result
}

export const flipBit = (num: number): number => {
  let result = 1
  let prevLength = 0
  let currLength = 0
  while (num !== 0) {
    if ((num & 1) === 1) {
      currLength++
    } else if ((num & 1) === 0) {
      prevLength = ((num >>> 1) & 1) === 0 ? 0 : currLength
      currLength = 0
    }

    result = Math.max(currLength + prevLength + 1, result)
    num >>>= 1
  }

  return result
}

export const longestSequece = (n: number): number => {
  const getAllAlternatingSequeces = (n: number): number[] => {
    let searchFor = 0
    let counter = 0
    const result: number[] = []

    for (let i = 0; i <= 32; ++i) {
      if ((n & 1) !== searchFor) {
        result.push(counter)
        counter = 0
        searchFor = n & 1
      }

      ++counter
      n >>>= 1
    }

    return result
  }

  const sequences = getAllAlternatingSequeces(n)
  let result = 0
  for (let i = 0; i < sequences.length; i += 2) {
    const zerosSeq = sequences[i]
    const leftSeq = i - 1 >= 0 ? sequences[i - 1] : 0
    const rightSeq = i + 1 < sequences.length ? sequences[i + 1] : 0

    if (zerosSeq === 1) {
      result = Math.max(leftSeq + rightSeq + 1, result)
    } else if (zerosSeq === 0) {
      result = Math.max(leftSeq, rightSeq, result)
    } else if (zerosSeq > 1) {
      result = Math.max(leftSeq + 1, rightSeq + 1, result)
    }
  }

  return result
}
