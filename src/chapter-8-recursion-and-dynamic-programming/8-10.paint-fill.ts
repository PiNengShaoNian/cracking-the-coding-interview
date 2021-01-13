export const paintFill = (
  screen: number[][],
  point: [number, number],
  color: number
): void => {
  const origin = screen[point[0]][point[1]]
  const columns = screen[0].length
  const rows = screen.length
  const dfs = (x: number, y: number): void => {
    if (screen[x][y] === origin) {
      screen[x][y] = color
    } else return

    if (x + 1 < rows) dfs(x + 1, y)
    if (x - 1 >= 0) dfs(x - 1, y)
    if (y + 1 < columns) dfs(x, y + 1)
    if (y - 1 >= 0) dfs(x, y - 1)
  }

  dfs(point[0], point[1])

  screen[point[0]][point[1]] = origin
}
