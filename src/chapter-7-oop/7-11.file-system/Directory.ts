import { Entry } from './Entry'
import { File } from './File'

export class Directory extends Entry {
  protected contents: Entry[]

  public constructor(n: string, p: Directory) {
    super(n, p)
    this.contents = []
  }

  protected getContents(): Array<Entry> {
    return this.contents
  }

  public size(): number {
    let size = 0
    for (const e of this.contents) {
      size += e.size()
    }
    return size
  }

  public numberOfFiles(): number {
    let count = 0
    for (const e of this.contents) {
      if (e instanceof Directory) {
        count++ // Directory counts as a file
        const d = e
        count += d.numberOfFiles()
      } else if (e instanceof File) {
        count++
      }
    }
    return count
  }

  public deleteEntry(entry: Entry): boolean {
    const index = this.contents.findIndex((e) => entry === e)
    if (index >= 0) {
      this.contents.splice(index, 1)
    }
    return true
  }

  public addEntry(entry: Entry): void {
    this.contents.push(entry)
  }
}
