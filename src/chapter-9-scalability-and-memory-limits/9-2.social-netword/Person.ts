export class Person {
  private friends: number[] = []
  private personID: number
  private info: string = ''

  public getInfo(): string {
    return this.info
  }
  public setInfo(info: string): void {
    this.info = info
  }

  public getFriends(): number[] {
    return this.friends
  }

  public getID(): number {
    return this.personID
  }
  public addFriend(id: number): void {
    this.friends.push(id)
  }

  public constructor(id: number) {
    this.personID = id
  }
}
