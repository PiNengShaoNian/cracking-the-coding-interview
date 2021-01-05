import Cycle from './cycle'
import EdgeWeightedDigraph from './EdgeWeightedDigraph'

export class Topological {
  private cycle: Cycle
  private _postOrder: number[] = []
  private visited: boolean[] = []
  private _order: number[] = []
  private graph: EdgeWeightedDigraph

  constructor(graph: EdgeWeightedDigraph) {
    this.cycle = new Cycle(graph)
    this.graph = graph

    if (this.cycle.hasCycle()) return

    for (let vertex = 0; vertex < graph.vertices(); vertex++) {
      if (!this.visited[vertex]) {
        this.dfs(vertex)
      }
    }

    this._order = [...this._postOrder].reverse()
  }

  dfs(vertex: number): void {
    this.visited[vertex] = true

    for (const edge of this.graph.adjacent(vertex)) {
      if (!this.visited[edge.to()]) {
        this.dfs(edge.to())
      }
    }

    this._postOrder.push(vertex)
  }

  order(): number[] {
    return this._order
  }

  postOrder(): number[] {
    return this._postOrder
  }

  hasCycle() {
    return this.cycle.hasCycle()
  }
}
