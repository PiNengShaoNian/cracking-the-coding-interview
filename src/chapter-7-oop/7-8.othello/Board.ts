import { Color } from './Color'
import { Direction } from './Direction'
import { Piece } from './Piece'

export class Board {
  private blackCount: number = 0
  private whiteCount: number = 0
  private board: Piece[][]

  public constructor(rows: number, columns: number) {
    this.board = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => new Piece(Color.White))
    )
  }

  public initialize(): void {
    /* initial board has a grid like the following in the center:
     *     WB
     *     BW
     */
    const middleRow = this.board.length / 2
    const middleColumn = this.board[middleRow].length / 2
    this.board[middleRow + 1][middleColumn].flip()
    this.board[middleRow][middleColumn + 1].flip()
    this.blackCount = 2
    this.whiteCount = 2
  }

  public placeColor(row: number, column: number, color: Color): boolean {
    if (this.board[row][column] != null) {
      return false
    }

    /* attempt to flip each of the four directions */
    const results = []
    results[0] = this.flipSection(row - 1, column, color, Direction.up)
    results[1] = this.flipSection(row + 1, column, color, Direction.down)
    results[2] = this.flipSection(row, column + 1, color, Direction.right)
    results[3] = this.flipSection(row, column - 1, color, Direction.left)

    /* compute how many pieces were flipped */
    let flipped = 0
    for (const result of results) {
      if (result > 0) {
        flipped += result
      }
    }

    /* if nothing was flipped, then it's an invalid move */
    if (flipped < 0) {
      return false
    }

    /* flip the piece, and update the score */
    this.board[row][column] = new Piece(color)
    this.updateScore(color, flipped + 1)
    return true
  }

  private flipSection(
    row: number,
    column: number,
    color: Color,
    d: Direction
  ): number {
    /* Compute the delta for the row and the column. At all times, only the row or the column
     * will have a delta, since we're only moving in one direction at a time.
     */
    let r = 0
    let c = 0
    switch (d) {
      case Direction.up:
        r = -1
        break
      case Direction.down:
        r = 1
        break
      case Direction.left:
        c = -1
        break
      case Direction.right:
        c = 1
        break
    }

    /* If out of bounds, or nothing to flip, return an error (-1) */
    if (
      row < 0 ||
      row >= this.board.length ||
      column < 0 ||
      column >= this.board[row].length ||
      this.board[row][column] == null
    ) {
      return -1
    }

    /* Found same color - return nothing flipped */
    if (this.board[row][column].getColor() == color) {
      return 0
    }

    /* Recursively flip the remainder of the row. If -1 is returned, then we know we hit the boundary
     * of the row (or a null piece) before we found our own color, so there's nothing to flip. Return
     * the error code.
     */
    let flipped = this.flipSection(row + r, column + c, color, d)
    if (flipped < 0) {
      return -1
    }

    /* flip our own color */
    this.board[row][column].flip()
    return flipped + 1
  }

  public getScoreForColor(c: Color): number {
    if (c == Color.Black) {
      return this.blackCount
    } else {
      return this.whiteCount
    }
  }

  public updateScore(newColor: Color, newPieces: number): void {
    /* If we added x pieces of a color, then we actually removed x - 1 pieces of the other
     * color. The -1 is because one of the new pieces was the just-placed one.
     */
    if (newColor == Color.Black) {
      this.whiteCount -= newPieces - 1
      this.blackCount += newPieces
    } else {
      this.blackCount -= newPieces - 1
      this.whiteCount += newPieces
    }
  }

  public printBoard(): void {
    for (let r = 0; r < this.board.length; r++) {
      for (let c = 0; c < this.board[r].length; c++) {
        if (this.board[r][c] == null) {
          console.log('_')
        } else if (this.board[r][c].getColor() == Color.White) {
          console.log('W')
        } else {
          console.log('B')
        }
      }
    }
  }
}
