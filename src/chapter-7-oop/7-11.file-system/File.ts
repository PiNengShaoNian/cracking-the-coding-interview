import { Directory } from './Directory'
import { Entry } from './Entry'

export class File extends Entry {
  private content: string = ''
  private _size: number

  public constructor(n: string, p: Directory, sz: number) {
    super(n, p)
    this._size = sz
  }

  public size(): number {
    return this._size
  }

  public getContents(): string {
    return this.content
  }

  public setContents(c: string): void {
    this.content = c
  }
}
