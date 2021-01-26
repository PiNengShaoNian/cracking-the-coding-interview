import Graph from '../util/Graph'

export const hasPath = (
  graph: Graph,
  source: number,
  dest: number
): boolean => {
  const visited: boolean[] = Array.from(
    { length: graph.vertices() },
    () => false
  )
  const dfs = (source: number) => {
    visited[source] = true

    for (const neighbor of graph.adjacent(source)) {
      if (!visited[neighbor]) {
        visited[neighbor] = true
        dfs(neighbor)
      }
    }
  }

  dfs(source)

  return visited[dest]
}
