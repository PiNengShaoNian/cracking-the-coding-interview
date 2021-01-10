import { AddRequest } from './AddRequest'
import { RequestStatus } from './RequestStatus'
import { User } from './User'
import { UserStatus } from './UserStatus'
import { UserStatusType } from './UserStatusType'

export class UserManager {
  private static instance: UserManager
  private usersById: Map<number, User> = new Map()
  private usersByAccountName: Map<string, User> = new Map()
  private onlineUsers: Map<number, User> = new Map<number, User>()

  public static getInstance(): UserManager {
    if (this.instance == null) {
      this.instance = new UserManager()
    }
    return this.instance
  }

  public addUser(fromUser: User, toAccountName: string): void {
    const toUser = this.usersByAccountName.get(toAccountName)!
    const req = new AddRequest(fromUser, toUser, new Date())
    toUser.receivedAddRequest(req)
    fromUser.sentAddRequest(req)
  }

  public approveAddRequest(req: AddRequest): void {
    req.status = RequestStatus.Accepted
    const from = req.getFromUser()
    const to = req.getToUser()
    from.addContact(to)
    to.addContact(from)
  }

  public rejectAddRequest(req: AddRequest): void {
    req.status = RequestStatus.Rejected
    const from = req.getFromUser()
    const to = req.getToUser()
    from.removeAddRequest(req)
    to.removeAddRequest(req)
  }

  public userSignedOn(accountName: string): void {
    const user = this.usersByAccountName.get(accountName)
    if (user != null) {
      user.setStatus(new UserStatus(UserStatusType.Available, ''))
      this.onlineUsers.set(user.getId(), user)
    }
  }

  public userSignedOff(accountName: string): void {
    const user = this.usersByAccountName.get(accountName)
    if (user != null) {
      user.setStatus(new UserStatus(UserStatusType.Offline, ''))
      this.onlineUsers.delete(user.getId())
    }
  }
}
