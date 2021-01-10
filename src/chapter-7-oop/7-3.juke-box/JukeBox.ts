import { CD } from './CD'
import { CDPlayer } from './CDPlayer'
import { Song } from './Song'
import { SongSelector } from './SongSelector'
import { User } from './User'

export class JukeBox {
  private cdPlayer: CDPlayer
  private user: User
  private cdCollection: Set<CD>
  private ts: SongSelector

  public constructor(
    cdPlayer: CDPlayer,
    user: User,
    cdCollection: Set<CD>,
    ts: SongSelector
  ) {
    this.cdPlayer = cdPlayer
    this.user = user
    this.cdCollection = cdCollection
    this.ts = ts
  }

  public getCurrentSong(): Song {
    return this.ts.getCurrentSong()
  }
  public setUser(u: User): void {
    this.user = u
  }
}
