import { Queue } from '../../util/queue'
import { Song } from './Song'

export class Playlist {
  private song: Song
  private queue: Queue<Song>
  public constructor(song: Song, queue: Queue<Song>) {
    this.song = song
    this.queue = queue
  }

  public getNextSongToPlay(): Song | null {
    return this.queue.front()
  }
  public queueUpSong(s: Song): void {
    this.queue.enqueue(s)
  }
}
