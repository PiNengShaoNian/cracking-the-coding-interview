const count2sInRangeAtDigit = (number: number, d: number): number => {
  const powerOf10 = Math.pow(10, d)
  const nextPowerOf10 = powerOf10 * 10
  const right = number % powerOf10
  const roundDown = number - (number % nextPowerOf10)
  const roundUp = roundDown + nextPowerOf10

  const digit = (number / powerOf10) % 10 >> 0
  if (digit < 2) {
    // if the digit in spot digit is
    return roundDown / 10
  } else if (digit == 2) {
    return roundDown / 10 + right + 1
  } else {
    return roundUp / 10
  }
}

export const count2sInRange = (number: number): number => {
  let count = 0
  let len = (number + '').length
  for (let digit = 0; digit < len; ++digit) {
    count += count2sInRangeAtDigit(number, digit)
  }
  return count
}
