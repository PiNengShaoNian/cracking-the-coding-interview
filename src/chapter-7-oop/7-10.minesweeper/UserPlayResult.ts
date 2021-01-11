import { GameState } from './Game'

export class UserPlayResult {
  private successful: boolean
  private resultingState: GameState
  public constructor(success: boolean, state: GameState) {
    this.successful = success
    this.resultingState = state
  }

  public successfulMove(): boolean {
    return this.successful
  }

  public getResultingState(): GameState {
    return this.resultingState
  }
}
