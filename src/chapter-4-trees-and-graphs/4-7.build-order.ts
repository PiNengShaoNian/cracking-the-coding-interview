import DirectedEdge from '../util/DirectedEdge'
import EdgeWeightedDigraph from '../util/EdgeWeightedDigraph'
import { Topological } from '../util/topological'

export const getBuildOrder = (
  projects: string[],
  dependencies: [string, string][]
): string[] => {
  const idToProjectMap = new Map<number, string>()
  const projectToIdMap = new Map<string, number>()

  for (let i = 0; i < projects.length; ++i) {
    idToProjectMap.set(i, projects[i])
    projectToIdMap.set(projects[i], i)
  }

  const graph = new EdgeWeightedDigraph(projects.length)

  for (let i = 0; i < dependencies.length; ++i) {
    const [a, b] = dependencies[i]
    const edge = new DirectedEdge(
      projectToIdMap.get(a)!,
      projectToIdMap.get(b)!,
      0
    )
    graph.addEdge(edge)
  }

  return new Topological(graph).order().map((v) => idToProjectMap.get(v)!)
}
