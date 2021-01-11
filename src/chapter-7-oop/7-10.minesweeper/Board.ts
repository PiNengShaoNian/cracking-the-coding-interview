import { Queue } from '../../util/queue'
import { uniform } from '../../util/uniform'
import { Cell } from './Cell'
import { GameState } from './Game'
import { UserPlay } from './UserPlay'
import { UserPlayResult } from './UserPlayResult'

export class Board {
  private nRows: number
  private nColumns: number
  private nBombs: number = 0
  private cells: Cell[][] = []
  private bombs: Cell[] = []
  private numUnexposedRemaining: number

  public constructor(r: number, c: number, b: number) {
    this.nRows = r
    this.nColumns = c
    this.nBombs = b

    this.initializeBoard()
    this.shuffleBoard()
    this.setNumberedCells()

    this.numUnexposedRemaining = this.nRows * this.nColumns - this.nBombs
  }

  private initializeBoard(): void {
    debugger
    this.cells = Array.from({ length: this.nRows }, (_, r) =>
      Array.from({ length: this.nColumns }, (_, c) => new Cell(r, c))
    )
    this.bombs = []

    for (let i = 0; i < this.nBombs; i++) {
      const r = (i / this.nColumns) >> 0
      const c = (i - r * this.nColumns) % this.nColumns
      this.bombs[i] = this.cells[r][c]
      this.bombs[i].setBomb(true)
    }
  }

  private shuffleBoard(): void {
    let nCells = this.nRows * this.nColumns
    for (let index1 = 0; index1 < nCells; index1++) {
      const index2 = index1 + uniform(0, nCells - index1)
      if (index1 != index2) {
        /* Get cell at index1. */
        const row1 = (index1 / this.nColumns) >> 0
        const column1 = (index1 - row1 * this.nColumns) % this.nColumns
        const cell1 = this.cells[row1][column1]

        /* Get cell at index2. */
        const row2 = (index2 / this.nColumns) >> 0
        const column2 = (index2 - row2 * this.nColumns) % this.nColumns
        const cell2 = this.cells[row2][column2]

        /* Swap. */
        this.cells[row1][column1] = cell2
        cell2.setRowAndColumn(row1, column1)
        this.cells[row2][column2] = cell1
        cell1.setRowAndColumn(row2, column2)
      }
    }
  }

  private inBounds(row: number, column: number): boolean {
    return row >= 0 && row < this.nRows && column >= 0 && column < this.nColumns
  }

  /* Set the cells around the bombs to the right number. Although
   * the bombs have been shuffled, the reference in the bombs array
   * is still to same object. */
  private setNumberedCells(): void {
    const deltas: [number, number][] = [
      // Offsets of 8 surrounding cells
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]

    for (const bomb of this.bombs) {
      const row = bomb.getRow()
      const col = bomb.getColumn()
      for (const delta of deltas) {
        const r = row + delta[0]
        const c = col + delta[1]
        if (this.inBounds(r, c)) {
          this.cells[r][c].incrementNumber()
        }
      }
    }
  }

  public printBoard(showUnderside: boolean): void {
    console.log('   ')
    let str = ''
    for (let i = 0; i < this.nColumns; i++) {
      str += i + ' '
    }

    console.log(str)

    str = ''
    for (let i = 0; i < this.nColumns; i++) {
      str += '--'
    }
    console.log(str)

    for (let r = 0; r < this.nRows; r++) {
      console.log(r + '| ')
      str = ''
      for (let c = 0; c < this.nColumns; c++) {
        if (showUnderside) {
          str += this.cells[r][c].getUndersideState()
        } else {
          str += this.cells[r][c].getSurfaceState()
        }
      }

      console.log(str)
    }
  }

  private flipCell(cell: Cell): boolean {
    if (!cell.isExposed() && !cell.isGuess()) {
      cell.flip()
      this.numUnexposedRemaining--
      return true
    }
    return false
  }

  public expandBlank(cell: Cell): void {
    const deltas: [number, number][] = [
      // Offsets of 8 surrounding cells
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ]

    const toExplore: Queue<Cell> = new Queue()
    toExplore.enqueue(cell)

    while (!toExplore.isEmpty()) {
      const current = toExplore.dequeue()!

      for (const delta of deltas) {
        const r = current.getRow() + delta[0]
        const c = current.getColumn() + delta[1]

        if (this.inBounds(r, c)) {
          const neighbor = this.cells[r][c]
          if (this.flipCell(neighbor) && neighbor.isBlank()) {
            toExplore.enqueue(neighbor)
          }
        }
      }
    }
  }

  public playFlip(play: UserPlay): UserPlayResult {
    const cell = this.getCellAtLocation(play)
    if (cell == null) {
      return new UserPlayResult(false, GameState.RUNNING)
    }

    if (play.isGuess()) {
      const guessResult = cell.toggleGuess()
      return new UserPlayResult(guessResult, GameState.RUNNING)
    }

    const result = this.flipCell(cell)

    if (cell.isBomb()) {
      return new UserPlayResult(result, GameState.LOST)
    }

    if (cell.isBlank()) {
      this.expandBlank(cell)
    }

    if (this.numUnexposedRemaining == 0) {
      return new UserPlayResult(result, GameState.WON)
    }

    return new UserPlayResult(result, GameState.RUNNING)
  }

  public getCellAtLocation(play: UserPlay): Cell | null {
    const row = play.getRow()
    const col = play.getColumn()
    if (!this.inBounds(row, col)) {
      return null
    }
    return this.cells[row][col]
  }

  public getNumRemaining(): number {
    return this.numUnexposedRemaining
  }
}
