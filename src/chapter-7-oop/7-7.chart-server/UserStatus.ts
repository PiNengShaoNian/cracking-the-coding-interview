import { UserStatusType } from './UserStatusType'

export class UserStatus {
  private message: string
  private type: UserStatusType
  public constructor(type: UserStatusType, message: string) {
    this.type = type
    this.message = message
  }

  public getStatusType(): UserStatusType {
    return this.type
  }

  public getMessage(): string {
    return this.message
  }
}
