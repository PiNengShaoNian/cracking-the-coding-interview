import { Song } from './Song'

export class SongSelector {
  private currentSong: Song
  public constructor(s: Song) {
    this.currentSong = s
  }
  public setSong(s: Song): void {
    this.currentSong = s
  }
  public getCurrentSong(): Song {
    return this.currentSong
  }
}
