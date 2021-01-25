export const add = (a: number, b: number): number => {
  if (b === 0) return a

  const sum = a ^ b
  const carry = (a & b) << 1

  return add(sum, carry)
}
