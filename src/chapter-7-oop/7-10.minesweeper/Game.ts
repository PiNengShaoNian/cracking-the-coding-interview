import { stdin } from 'process'
import { Board } from './Board'
import { UserPlay } from './UserPlay'

export enum GameState {
  WON,
  LOST,
  RUNNING,
}

export class Game {
  private board!: Board
  private rows: number
  private columns: number
  private bombs: number
  private state: GameState

  public constructor(r: number, c: number, b: number) {
    this.rows = r
    this.columns = c
    this.bombs = b
    this.state = GameState.RUNNING
  }

  public initialize(): boolean {
    if (this.board == null) {
      this.board = new Board(this.rows, this.columns, this.bombs)
      this.board.printBoard(true)
      return true
    } else {
      console.log('Game has already been initialized.')
      return false
    }
  }

  public start(): boolean {
    if (this.board == null) {
      this.initialize()
    }
    return this.playGame()
  }

  public printGameState(): void {
    if (this.state == GameState.LOST) {
      this.board.printBoard(true)
      console.log('FAIL')
    } else if (this.state == GameState.WON) {
      this.board.printBoard(true)
      console.log('WIN')
    } else {
      console.log('Number remaining: ' + this.board.getNumRemaining())
      this.board.printBoard(false)
    }
  }

  private playGame(): boolean {
    let success: boolean = true
    stdin.on('data', (input: string) => {
      input = input.toString()
      this.printGameState()

      if (this.state == GameState.RUNNING) {
        if (input === 'exit') {
          success = false
          return false
        }

        const play = UserPlay.fromString(input)
        if (play == null) {
          return
        }

        const result = this.board.playFlip(play)
        if (result.successfulMove()) {
          this.state = result.getResultingState()
        } else {
          console.log(
            'Could not flip cell (' +
              play.getRow() +
              ',' +
              play.getColumn() +
              ').'
          )
        }
        this.printGameState()
      }

      return
    })

    return success
  }
}
