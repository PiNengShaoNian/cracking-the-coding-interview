export class Location {
  private row: number
  private column: number
  public constructor(r: number, c: number) {
    this.row = r
    this.column = c
  }

  public isSameAs(r: number, c: number): boolean {
    return this.row == r && this.column == c
  }

  public getRow(): number {
    return this.row
  }

  public getColumn(): number {
    return this.column
  }
}
