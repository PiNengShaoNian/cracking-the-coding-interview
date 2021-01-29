export const missingOne = (arr: number[]): number => {
  const n = arr.length + 1

  const actual = (n * (n + 1)) / 2
  let sum = 0

  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i]
  }

  return actual - sum
}

const squareSumToN = (n: number): number => {
  let result = 0

  for (let i = 1; i <= n; ++i) {
    result += i * i
  }

  return result
}

const solveEquation = (r1: number, r2: number): [number, number] => {
  const a = 2
  const b = -2 * r1
  const c = r1 * r1 - r2

  const x = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)

  return [x, r1 - x]
}

export const missingTwo = (arr: number[]): [number, number] => {
  const maxValue = arr.length + 2
  let remOne = (maxValue * (maxValue + 1)) / 2
  let remSqure = squareSumToN(maxValue)

  for (let i = 0; i < arr.length; ++i) {
    remOne -= arr[i]
    remSqure -= arr[i] * arr[i]
  }

  return solveEquation(remOne, remSqure)
}
