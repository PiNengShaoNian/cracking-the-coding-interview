import { Message } from './Message'
import { User } from './User'

export abstract class Conversation {
  protected participants: Array<User> = []
  protected id: number = 0
  protected messages: Array<Message> = []

  public getMessages(): Message[] {
    return this.messages
  }

  public addMessage(m: Message): boolean {
    this.messages.push(m)
    return true
  }

  public getId(): number {
    return this.id
  }
}
