export class User {
  private userId: number
  private details: string
  private accountType: number

  public renewMembership(): void {}

  public constructor(id: number, details: string, accountType: number) {
    this.userId = id
    this.details = details
    this.accountType = accountType
  }

  /* getters and setters */
  public getID(): number {
    return this.userId
  }
  public setID(id: number): void {
    this.userId = id
  }
  public getDetails(): string {
    return this.details
  }
  public setDetails(details: string): void {
    this.details = details
  }
  public getAccountType(): number {
    return this.accountType
  }
  public setAccountType(accountType: number): void {
    this.accountType = accountType
  }
}
