import { RequestStatus } from './RequestStatus'
import { User } from './User'

export class AddRequest {
  private fromUser: User
  private toUser: User
  private date: Date
  status: RequestStatus

  public constructor(from: User, to: User, date: Date) {
    this.fromUser = from
    this.toUser = to
    this.date = date
    this.status = RequestStatus.Unread
  }

  public getStatus(): RequestStatus {
    return this.status
  }

  public getFromUser(): User {
    return this.fromUser
  }

  public getToUser(): User {
    return this.toUser
  }

  public getDate(): Date {
    return this.date
  }
}
