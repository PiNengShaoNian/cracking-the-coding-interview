import { User } from './User'

export class UserManager {
  private users: Map<number, User> = new Map()

  public addUser(
    id: number,
    details: string,
    accountType: number
  ): User | null {
    if (this.users.has(id)) {
      return null
    }
    const user = new User(id, details, accountType)
    this.users.set(id, user)
    return user
  }

  public remove(u: User): boolean {
    return this.remove1(u.getID())
  }

  public remove1(id: number): boolean {
    if (!this.users.has(id)) {
      return false
    }
    this.users.delete(id)
    return true
  }

  public find(id: number): User | null {
    return this.users.get(id) ?? null
  }
}
