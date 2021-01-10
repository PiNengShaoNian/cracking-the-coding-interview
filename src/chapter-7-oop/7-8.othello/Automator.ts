import { uniform } from '../../util/uniform'
import { Board } from './Board'
import { Game } from './Game'
import { Location } from './Location'
import { Player } from './Player'

export class Automator {
  private players: Player[] = []
  private lastPlayer: Player | null = null
  public remainingMoves: Array<Location> = []
  private static instance: Automator

  private constructor() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const loc: Location = new Location(i, j)
        this.remainingMoves.push(loc)
      }
    }
  }

  public static getInstance(): Automator {
    if (this.instance == null) {
      this.instance = new Automator()
    }
    return this.instance
  }

  public initialize(ps: Player[]): void {
    this.players = ps
    this.lastPlayer = this.players[1]
  }

  public shuffle(): void {
    for (let i = 0; i < this.remainingMoves.length; i++) {
      const t = uniform(i, this.remainingMoves.length)
      const other: Location = this.remainingMoves[t]
      const current: Location = this.remainingMoves[i]
      this.remainingMoves[t] = current
      this.remainingMoves[i] = other
    }
  }

  public removeLocation(r: number, c: number): void {
    for (let i = 0; i < this.remainingMoves.length; i++) {
      const loc: Location = this.remainingMoves[i]
      if (loc.isSameAs(r, c)) {
        this.remainingMoves.splice(i, 1)
      }
    }
  }

  public getLocation(index: number): Location {
    return this.remainingMoves[index]
  }

  public playRandom(): boolean {
    const board: Board = Game.getInstance().getBoard()
    this.shuffle()
    this.lastPlayer =
      this.lastPlayer == this.players[0] ? this.players[1] : this.players[0]
    const color = this.lastPlayer.getColor().toString()
    for (let i = 0; i < this.remainingMoves.length; i++) {
      const loc = this.remainingMoves[i]
      const success = this.lastPlayer.playPiece(loc.getRow(), loc.getColumn())

      if (success) {
        console.log(
          'Success: ' +
            color +
            ' move at (' +
            loc.getRow() +
            ', ' +
            loc.getColumn() +
            ')'
        )
        board.printBoard()
        this.printScores()
        return true
      }
    }
    console.log('Game over. No moves found for ' + color)
    return false
  }

  public isOver(): boolean {
    if (this.players[0].getScore() == 0 || this.players[1].getScore() == 0) {
      return true
    }
    return false
  }

  public printScores(): void {
    console.log(
      'Score: ' +
        this.players[0].getColor().toString() +
        ': ' +
        this.players[0].getScore() +
        ', ' +
        this.players[1].getColor().toString() +
        ': ' +
        this.players[1].getScore()
    )
  }
}
