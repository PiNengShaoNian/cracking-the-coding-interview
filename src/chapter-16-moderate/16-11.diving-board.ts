export const allLengths = (
  longer: number,
  shorter: number,
  k: number
): number[] => {
  const set = new Set<number>()
  for (let i = 0; i < 1 << k; ++i) {
    let sum = 0
    for (let j = 0; j <= k; ++j) {
      if (i & (1 << j)) {
        sum += longer
      } else sum += shorter
    }

    set.add(sum)
  }

  return Array.from(set)
}

export const allLengths1 = (
  longer: number,
  shorter: number,
  k: number
): number[] => {
  const set = new Set<number>()
  for (let i = 0; i <= k; ++i) {
    set.add(i * longer + (k - i) * shorter)
  }

  return Array.from(set)
}

export const allLengths2 = (
  longer: number,
  shorter: number,
  k: number
): number[] => {
  const memo = new Set<string>()
  const lengths = new Set<number>()
  const core = (
    longer: number,
    shorter: number,
    k: number,
    total: number,
    memo: Set<string>,
    lengths: Set<number>
  ): void => {
    if (k === 0) {
      lengths.add(total)
      return
    }

    const key = k + ' ' + total

    if (memo.has(key)) return

    core(longer, shorter, k - 1, total + longer, memo, lengths)
    core(longer, shorter, k - 1, total + shorter, memo, lengths)

    memo.add(key)
  }

  core(longer, shorter, k, 0, memo, lengths)

  return Array.from(lengths)
}
