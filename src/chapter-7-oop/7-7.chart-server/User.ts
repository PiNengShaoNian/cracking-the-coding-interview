import { AddRequest } from './AddRequest'
import { GroupChat } from './GroupChat'
import { Message } from './Message'
import { PrivateChat } from './PrivateChat'
import { UserManager } from './UserManager'
import { UserStatus } from './UserStatus'

export class User {
  private id: number
  private status: UserStatus | null = null
  private privateChats: Map<number, PrivateChat> = new Map<
    number,
    PrivateChat
  >()
  private groupChats: Array<GroupChat> = []
  private receivedAddRequests: Map<number, AddRequest> = new Map()
  private sentAddRequests: Map<number, AddRequest> = new Map()

  private contacts: Map<number, User> = new Map<number, User>()
  private accountName: string
  private fullName: string

  public constructor(id: number, accountName: string, fullName: string) {
    this.accountName = accountName
    this.fullName = fullName
    this.id = id
  }

  public sendMessageToUser(toUser: User, content: string): boolean {
    let chat: PrivateChat = this.privateChats.get(toUser.getId())!
    if (chat == null) {
      chat = new PrivateChat(this, toUser)
      this.privateChats.set(toUser.getId(), chat)
    }
    const message = new Message(content, new Date())
    return chat.addMessage(message)
  }

  public sendMessageToGroupChat(groupId: number, content: string): boolean {
    let chat: null | GroupChat = this.groupChats[groupId] ?? null
    if (chat != null) {
      const message = new Message(content, new Date())
      return chat.addMessage(message)
    }
    return false
  }

  public setStatus(status: UserStatus): void {
    this.status = status
  }

  public getStatus(): UserStatus | null {
    return this.status
  }

  public addContact(user: User): boolean {
    if (this.contacts.has(user.getId())) {
      return false
    } else {
      this.contacts.set(user.getId(), user)
      return true
    }
  }

  public receivedAddRequest(req: AddRequest): void {
    const senderId = req.getFromUser().getId()
    if (!this.receivedAddRequests.has(senderId)) {
      this.receivedAddRequests.set(senderId, req)
    }
  }

  public sentAddRequest(req: AddRequest): void {
    const receiverId = req.getFromUser().getId()
    if (!this.sentAddRequests.has(receiverId)) {
      this.sentAddRequests.set(receiverId, req)
    }
  }

  public removeAddRequest(req: AddRequest): void {
    if (req.getToUser() == this) {
      this.receivedAddRequests.delete(req.getToUser().getId())
    } else if (req.getFromUser() == this) {
      this.sentAddRequests.delete(req.getFromUser().getId())
    }
  }

  public requestAddUser(accountName: string): void {
    UserManager.getInstance().addUser(this, accountName)
  }

  public addConversation(conversation: PrivateChat): void {
    const otherUser = conversation.getOtherParticipant(this)!
    this.privateChats.set(otherUser.getId(), conversation)
  }

  public addConversation1(conversation: GroupChat): void {
    this.groupChats.push(conversation)
  }

  public getId(): number {
    return this.id
  }

  public getAccountName(): string {
    return this.accountName
  }

  public getFullName(): string {
    return this.fullName
  }
}
