export class UserPlay {
  private row: number = 0
  private column: number = 0
  private _isGuess: boolean
  private static inputRE = /^\d* \d+/

  private constructor(r: number, c: number, guess: boolean) {
    this.setRow(r)
    this.setColumn(c)
    this._isGuess = guess
  }

  public static fromString(input: string): UserPlay | null {
    let isGuess = false

    if (input.length > 0 && input.charAt(0) == 'B') {
      isGuess = true
      input = input.substring(1)
    }

    if (!this.inputRE.test(input)) return null

    const parts: number[] = input.split(' ').map((v) => +v)
    try {
      const r = parts[0]
      const c = parts[1]
      return new UserPlay(r, c, isGuess)
    } catch (e) {
      return null
    }
  }

  public isGuess(): boolean {
    return this._isGuess
  }

  public isMove(): boolean {
    return !this.isMove()
  }

  public getColumn(): number {
    return this.column
  }

  public setColumn(column: number): void {
    this.column = column
  }

  public getRow(): number {
    return this.row
  }

  public setRow(row: number): void {
    this.row = row
  }
}
