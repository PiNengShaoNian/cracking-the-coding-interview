export const maxAliveYear1 = (
  years: [number, number][],
  min: number,
  max: number
): number => {
  const deltas = getPopulationDeltas(years, min, max)

  let currentlyAlive = 0
  let maxAlive = 0
  let maxAliveYear = min

  for (let i = 0; i < deltas.length; ++i) {
    currentlyAlive += deltas[i]
    if (currentlyAlive > maxAlive) {
      maxAlive = currentlyAlive
      maxAliveYear = i
    }
  }

  return maxAliveYear + min
}

const getPopulationDeltas = (
  years: [number, number][],
  min: number,
  max: number
): number[] => {
  const deltas = Array.from({ length: max - min + 2 }, () => 0)

  for (const [start, end] of years) {
    ++deltas[start - min]
    --deltas[end + 1 - min]
  }

  return deltas
}

export const maxAliveYear2 = (
  years: [number, number][],
  min: number,
  _max: number
): number => {
  const births = years.map((v) => v[0])
  births.sort()
  const deaths = years.map((v) => v[1])
  deaths.sort()

  let currentlyAlive = 0
  let maxAlive = 0
  let maxAliveYear = min
  let birthIndex = 0
  let deathIndex = 0
  while (birthIndex < births.length) {
    if (births[birthIndex] <= deaths[deathIndex]) {
      ++currentlyAlive

      if (currentlyAlive > maxAlive) {
        maxAliveYear = births[birthIndex]
        maxAlive = currentlyAlive
      }
      ++birthIndex
    } else if (births[birthIndex] > deaths[deathIndex]) {
      --currentlyAlive
      ++deathIndex
    }
  }

  return maxAliveYear
}
