import { Color } from './Color'

export class Piece {
  private color: Color

  public constructor(c: Color) {
    this.color = c
  }

  public flip(): void {
    if (this.color == Color.Black) {
      this.color = Color.White
    } else {
      this.color = Color.Black
    }
  }

  public getColor(): Color {
    return this.color
  }
}
