import { User } from './User'
import { Conversation } from './Conversation'

export class GroupChat extends Conversation {
  public removeParticipant(user: User): void {
    const index = this.participants.findIndex((v) => v === user)

    if (index >= 0) {
      this.participants.splice(index, 1)
    }
  }

  public addParticipant(user: User): void {
    this.participants.push(user)
  }
}
