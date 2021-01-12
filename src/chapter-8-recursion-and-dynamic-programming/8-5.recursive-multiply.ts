export const minProduct1 = (a: number, b: number): number => {
  const minProduct = (smaller: number, bigger: number): number => {
    if (smaller === 0) return 0
    if (smaller === 1) return bigger

    const s = smaller >> 1
    const site1 = minProduct(s, bigger)
    let site2 = site1
    if (smaller % 2 === 1) {
      site2 = minProduct(smaller - s, bigger)
    }

    return site1 + site2
  }

  const smaller = a > b ? b : a
  const bigger = a > b ? a : b
  return minProduct(smaller, bigger)
}

export const minProduct2 = (a: number, b: number): number => {
  const memo: number[] = []
  const minProduct = (
    smaller: number,
    bigger: number,
    memo: number[]
  ): number => {
    if (smaller === 0) return 0
    if (smaller === 1) return bigger

    if (typeof memo[smaller] !== 'undefined') return memo[smaller]

    const s = smaller >> 1
    const site1 = minProduct(s, bigger, memo)
    let site2 = site1
    if (smaller % 2 === 1) {
      site2 = minProduct(smaller - s, bigger, memo)
    }

    return (memo[smaller] = site1 + site2)
  }

  const smaller = a > b ? b : a
  const bigger = a > b ? a : b
  return minProduct(smaller, bigger, memo)
}

export const minProduct3 = (a: number, b: number): number => {
  const memo: number[] = []
  const minProduct = (
    smaller: number,
    bigger: number,
    memo: number[]
  ): number => {
    if (smaller === 0) return 0
    if (smaller === 1) return bigger

    if (typeof memo[smaller] !== 'undefined') return memo[smaller]

    const s = smaller >> 1
    const site1 = minProduct(s, bigger, memo)
    let site2 = site1
    if (smaller % 2 === 1) {
      site2 = bigger + site1
    }

    return (memo[smaller] = site1 + site2)
  }

  const smaller = a > b ? b : a
  const bigger = a > b ? a : b
  return minProduct(smaller, bigger, memo)
}
