import { Machine } from './Machine'
import { Person } from './Person'

export class Server {
  machines: Map<number, Machine> = new Map<number, Machine>()
  personToMachineMap: Map<number, number> = new Map()

  public getMachineWithId(machineID: number): Machine | null {
    return this.machines.get(machineID) ?? null
  }

  public getMachineIDForUser(personID: number): number {
    const machineID = this.personToMachineMap.get(personID) ?? null
    return machineID === null ? -1 : machineID
  }

  public getPersonWithID(personID: number): Person | null {
    const machineID = this.personToMachineMap.get(personID) ?? null
    if (machineID == null) {
      return null
    }
    const machine = this.getMachineWithId(machineID)
    if (machine == null) {
      return null
    }
    return machine.getPersonWithID(personID)
  }
}
