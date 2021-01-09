import { Call } from './Call'
import { Manager } from './Manager'
import { Supervisor } from './Supervisor'
import { SwitchboardOperator } from './SwitchboardOperator'

export class CallCenter {
  private supervisor: Supervisor
  private manager: Manager
  private switchboardOperators: SwitchboardOperator[] = []

  constructor() {
    this.supervisor = new Supervisor(666)
    this.manager = new Manager(66)
    for (let i = 0; i < 10; ++i) {
      this.switchboardOperators.push(new SwitchboardOperator(i))
    }
  }

  handleCall(call: Call): void {
    for (const op of this.switchboardOperators) {
      if (op.isAvailable()) {
        op.setAvailable(false)
        op.handleCall(call)
        op.setAvailable(true)
        return
      }
    }

    if (this.supervisor.isAvailable()) {
      this.supervisor.setAvailable(false)
      this.supervisor.handleCall(call)
      this.supervisor.setAvailable(true)
      return
    }
    
    if (this.manager.isAvailable()) {
      this.manager.setAvailable(false)
      this.manager.handleCall(call)
      this.manager.setAvailable(true)
      return
    }
  }
}
