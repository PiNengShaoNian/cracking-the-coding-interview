import { Call } from './Call'

export class Supervisor {
  private _isAvailable = true

  constructor(private id: number) {}

  handleCall(call: Call) {
    if (this._isAvailable) {
      console.log(`Supervisor ${this.id}, call ${call.caller}`)
    } else {
      throw new Error(`Supervisor ${this.id} not available`)
    }
  }

  getId(): number {
    return this.id
  }

  isAvailable(): boolean {
    return this._isAvailable
  }

  setAvailable(value: boolean): void {
    this._isAvailable = value
  }
}
