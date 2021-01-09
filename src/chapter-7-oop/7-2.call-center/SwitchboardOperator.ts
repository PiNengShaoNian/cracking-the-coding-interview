import { Call } from './Call'
import { Employee } from './Employee'

export class SwitchboardOperator implements Employee {
  private _isAvailable = true

  constructor(private id: number) {}

  handleCall(call: Call) {
    if (this._isAvailable) {
      console.log(`SwitchboardOperator ${this.id}, call ${call.caller}`)
    } else {
      throw new Error(`SwitchboardOperator ${this.id} not available`)
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
