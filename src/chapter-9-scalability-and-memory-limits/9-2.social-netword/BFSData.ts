import { LinkedList } from '../../util/LinkedList'
import { PathNode } from './PathNode'
import { Person } from './Person'

export class BFSData {
  public toVisit: LinkedList<PathNode> = new LinkedList<PathNode>()
  public visited: Map<number, PathNode> = new Map()

  public constructor(root: Person) {
    const sourcePath = new PathNode(root, null)
    this.toVisit.addLast(sourcePath)
    this.visited.set(root.getID(), sourcePath)
  }

  public isFinished(): boolean {
    return this.toVisit.isEmpty()
  }
}
