export class Message {
  private content: string
  private date: Date
  public constructor(content: string, date: Date) {
    this.content = content
    this.date = date
  }

  public getContent(): string {
    return this.content
  }

  public getDate(): Date {
    return this.date
  }
}
