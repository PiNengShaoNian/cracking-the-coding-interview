import { Conversation } from './Conversation'
import { User } from './User'

export class PrivateChat extends Conversation {
  public constructor(user1: User, user2: User) {
    super()
    this.participants.push(user1)
    this.participants.push(user2)
  }

  public getOtherParticipant(primary: User): User | null {
    if (this.participants[0] == primary) {
      return this.participants[1]
    } else if (this.participants[1] == primary) {
      return this.participants[0]
    }
    return null
  }
}
