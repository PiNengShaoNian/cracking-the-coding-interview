import Graph from '../../util/Graph'
import { hasPath } from '../4-1.has-path'

test('能正确的判断是否有路径', () => {
  const graph = new Graph(5)

  graph.addEdge(0, 1)
  graph.addEdge(1, 2)
  graph.addEdge(2, 3)

  expect(hasPath(graph, 0, 3)).toBeTruthy()
  expect(hasPath(graph, 0, 4)).toBeFalsy()
})
