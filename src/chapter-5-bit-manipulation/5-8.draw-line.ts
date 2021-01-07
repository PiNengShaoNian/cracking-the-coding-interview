export const drawLine = (
  screen: Int16Array,
  width: number,
  x1: number,
  x2: number,
  y: number
): void => {
  const startOffset = x1 % 8
  let firstFullByte = (x1 / 8) >> 0

  if (startOffset !== 0) {
    ++firstFullByte
  }

  const endOffset = x2 % 8
  let lastFullBype = (x2 / 8) >> 0

  if (endOffset !== 7) {
    --lastFullBype
  }

  for (let i = firstFullByte; i <= lastFullBype; ++i) {
    screen[(width / 8) * y + firstFullByte] |= 0xff
  }

  const startMask = 0xff >> startOffset
  const endMask = ~(0xff >> (endOffset + 1))

  if ((x1 / 8) >> 0 === (x2 / 8) >> 0) {
    const mask = startMask & endMask
    screen[(width / 8) * y + ((x1 / 8) >> 0)] |= mask
  } else {
    if (startOffset !== 0) {
      screen[(width / 8) * y + ((x1 / 8) >> 0)] |= startMask
    }

    if (endOffset !== 7) {
      screen[(width / 8) * y + ((x2 / 8) >> 0)] |= endMask
    }
  }
}
