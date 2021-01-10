export class User {
  private name: string
  public getName(): string {
    return this.name
  }
  public setName(name: string): void {
    this.name = name
  }
  public getID(): number {
    return this.ID
  }
  public setID(iD: number): void {
    this.ID = iD
  }
  private ID: number
  public constructor(name: string, iD: number) {
    this.name = name
    this.ID = iD
  }
  public getUser(): User {
    return this
  }
  public static addUser(name: string, iD: number): User {
    return new User(name, iD)
  }
}
