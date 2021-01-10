import { Color } from './Color'
import { Game } from './Game'

export class Player {
  private color: Color
  public constructor(c: Color) {
    this.color = c
  }

  public getScore(): number {
    return Game.getInstance().getBoard().getScoreForColor(this.color)
  }

  public playPiece(row: number, column: number): boolean {
    return Game.getInstance().getBoard().placeColor(row, column, this.color)
  }

  public getColor(): Color {
    return this.color
  }
}
