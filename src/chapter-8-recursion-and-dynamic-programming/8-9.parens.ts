const getRightParenIndex = (l: number, s: string): number => {
  const stack: string[] = []
  let result = -1
  for (let i = l; i < s.length; ++i) {
    if (s[i] === '(') {
      stack.push(s[i])
    } else {
      stack.pop()
      
      if (!stack.length) {
        result = i
        break
      }
    }
  }

  return result
}
export const getParensPermutation = (n: number): string[] => {
  if (n === 1) {
    return ['()']
  }

  const result: string[] = []
  const permutation = getParensPermutation(n - 1)

  for (const p of permutation) {
    result.push('()' + p)
    let start = 0
    while (start < p.length - 1) {
      let end = getRightParenIndex(start, p)
      if (end === -1) break
      const before = p.slice(0, start)
      const after = p.slice(end + 1)
      const middle = p.slice(start, end + 1)

      start = end + 1

      result.push(before + '(' + middle + ')' + after)
    }
  }

  return result
}
