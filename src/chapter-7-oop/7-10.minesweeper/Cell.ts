export class Cell {
  private row: number
  private column: number
  private _isBomb: boolean
  private number: number
  private _isExposed: boolean = false
  private _isGuess: boolean = false

  public constructor(r: number, c: number) {
    this._isBomb = false
    this.number = 0
    this.row = r
    this.column = c
  }

  public setRowAndColumn(r: number, c: number): void {
    this.row = r
    this.column = c
  }

  public setBomb(bomb: boolean): void {
    this._isBomb = bomb
    this.number = -1
  }

  public incrementNumber(): void {
    this.number++
  }

  public getRow(): number {
    return this.row
  }

  public getColumn(): number {
    return this.column
  }

  public isBomb(): boolean {
    return this._isBomb
  }

  public isBlank(): boolean {
    return this.number == 0
  }

  public isExposed(): boolean {
    return this._isExposed
  }

  public flip(): boolean {
    this._isExposed = true
    return !this.isBomb
  }

  public toggleGuess(): boolean {
    if (!this.isExposed()) {
      this._isGuess = !this._isGuess
    }
    return this._isGuess
  }

  public isGuess(): boolean {
    return this._isGuess
  }

  public toString(): string {
    return this.getUndersideState()
  }

  public getSurfaceState(): string {
    if (this.isExposed()) {
      return this.getUndersideState()
    } else if (this._isGuess) {
      return 'B '
    } else {
      return '? '
    }
  }

  public getUndersideState(): string {
    if (this.isBomb()) {
      return '* '
    } else if (this.number > 0) {
      return this.number + ' '
    } else {
      return '  '
    }
  }
}
