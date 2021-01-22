export const estimate = (
  expected: string,
  actual: string
): [number, number] => {
  let map: Record<string, number> = {
    R: 0,
    Y: 0,
    G: 0,
    B: 0,
  }

  let accurate = 0
  let approximate = 0
  const used: boolean[] = []
  for (let i = 0; i < expected.length; ++i) {
    if (expected[i] === actual[i]) {
      ++accurate
      used[i] = true
    } else ++map[expected[i]]
  }

  for (let i = 0; i < actual.length; ++i) {
    if (!used[i] && map[actual[i]]) {
      --map[actual[i]]
      ++approximate
    }
  }

  return [accurate, approximate]
}
