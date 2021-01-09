const runOneFamily = (): [number, number] => {
  let girls = 0
  let boys = 0

  while (!girls) {
    if (Math.random() >= 0.5) {
      ++girls
    } else ++boys
  }

  return [girls, boys]
}

const runNFamilies = (n: number): number => {
  let girls = 0
  let boys = 0

  for (let i = 0; i < n; ++i) {
    const [g, b] = runOneFamily()
    girls += g
    boys += b
  }

  return girls / boys
}
