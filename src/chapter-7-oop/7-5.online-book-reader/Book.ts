export class Book {
  private bookId: number
  private details: string

  public constructor(id: number, det: string) {
    this.bookId = id
    this.details = det
  }

  public update(): void {}

  public getID(): number {
    return this.bookId
  }

  public setID(id: number): void {
    this.bookId = id
  }

  public getDetails(): string {
    return this.details
  }

  public setDetails(details: string): void {
    this.details = details
  }
}
