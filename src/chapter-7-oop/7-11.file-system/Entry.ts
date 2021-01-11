import { Directory } from './Directory'

export abstract class Entry {
  protected parent: Directory
  protected created: number
  protected lastUpdated: number = 0
  protected lastAccessed: number = 0
  protected name: string

  public constructor(n: string, p: Directory) {
    this.name = n
    this.parent = p
    this.created = Date.now()
  }

  public delete(): boolean {
    if (this.parent == null) {
      return false
    }
    return this.parent.deleteEntry(this)
  }

  public abstract size(): number

  public getFullPath(): string {
    if (this.parent == null) {
      return this.name
    } else {
      return this.parent.getFullPath() + '/' + this.name
    }
  }

  public getCreationTime(): number {
    return this.created
  }

  public getLastUpdatedTime(): number {
    return this.lastUpdated
  }

  public getLastAccessedTime(): number {
    return this.lastAccessed
  }

  public changeName(n: string): void {
    this.name = n
  }

  public getName(): string {
    return this.name
  }
}
