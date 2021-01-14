import { Person } from './Person'

export class Machine {
  public persons: Map<number, Person> = new Map()
  public machineID: number = 0

  public getPersonWithID(personID: number): Person | null {
    return this.persons.get(personID) ?? null
  }
}
