import { Automator } from './Automator'
import { Board } from './Board'
import { Color } from './Color'
import { Player } from './Player'

export class Game {
  private players: Player[] = []
  private static instance: Game
  private board: Board
  private readonly ROWS: number = 10
  private readonly COLUMNS: number = 10

  private constructor() {
    this.board = new Board(this.ROWS, this.COLUMNS)
    this.players = []
    this.players[0] = new Player(Color.Black)
    this.players[1] = new Player(Color.White)
    Automator.getInstance().initialize(this.players) // used for testing
  }

  public static getInstance(): Game {
    if (this.instance == null) {
      this.instance = new Game()
    }
    return this.instance
  }

  public getBoard(): Board {
    return this.board
  }
}
