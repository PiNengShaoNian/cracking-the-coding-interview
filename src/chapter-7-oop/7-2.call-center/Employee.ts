import { Call } from './Call'

export interface Employee {
  handleCall(call: Call): void
  isAvailable(): boolean
}
