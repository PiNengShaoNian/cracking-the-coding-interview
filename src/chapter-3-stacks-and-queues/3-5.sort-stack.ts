export const sortStack = (stack: number[]): number[] => {
  const dest: number[] = []

  while (stack.length) {
    const temp = stack.pop()!

    while (dest.length && dest[dest.length - 1] > temp) stack.push(dest.pop()!)

    dest.push(temp)
  }

  return dest
}
