export type MoveInfo = {
  position: [number, number]
  dir: number
}

export const printKMoves = (k: number): void => {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  const moves: MoveInfo[] = []

  const colors = new Set<string>()
  moves.push(
    {
      position: [0, 0],
      dir: 0,
    },
    {
      position: [0, 1],
      dir: 0,
    }
  )

  for (let i = 0; i < k; ++i) {
    const { position, dir } = moves[moves.length - 1]

    const key = position.join(',')
    const isBlack = colors.has(key)
    const newX = position[0] + directions[dir][0]
    const newY = position[1] + directions[dir][1]

    let newDir: number

    if (isBlack) {
      if (dir - 1 >= 0) newDir = dir - 1
      else newDir = directions.length - 1
      colors.delete(key)
    } else {
      colors.add(key)
      newDir = (dir + 1) % directions.length
    }

    moves.push({
      position: [newX, newY],
      dir: newDir,
    })
  }

  console.log(moves)
}
