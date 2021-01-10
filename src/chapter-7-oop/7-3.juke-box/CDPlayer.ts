import { CD } from './CD'
import { Playlist } from './Playlist'
import { Song } from './Song'

export class CDPlayer {
  private p: Playlist
  private c: CD | null

  public getPlaylist(): Playlist {
    return this.p
  }
  public setPlaylist(p: Playlist): void {
    this.p = p
  }
  public getCD(): CD | null {
    return this.c
  }
  public setCD(c: CD): void {
    this.c = c
  }

  public constructor(p: Playlist, c: CD | null = null) {
    this.p = p
    this.c = c
  }

  public CDPlayer(c: CD) {
    this.c = c
  }
  public playSong(_: Song): void {}
}
