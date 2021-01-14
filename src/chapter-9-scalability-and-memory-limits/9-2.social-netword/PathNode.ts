import { LinkedList } from '../../util/LinkedList'
import { Person } from './Person'

export class PathNode {
  private person: Person | null = null
  private previousNode: PathNode | null = null
  public constructor(p: Person, previous: PathNode | null = null) {
    this.person = p
    this.previousNode = previous
  }

  public getPerson(): Person | null {
    return this.person
  }

  public collapse(startsWithRoot: boolean): LinkedList<Person> {
    const path: LinkedList<Person> = new LinkedList()
    let node: PathNode | null = this
    while (node != null) {
      if (startsWithRoot) {
        path.addLast(node.person!)
      } else {
        path.addFirst(node.person!)
      }
      node = node.previousNode
    }
    return path
  }
}
