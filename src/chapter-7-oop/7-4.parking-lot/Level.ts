import { ParkingSpot } from './ParkingSpot'
import { Vehicle } from './Vehicle'
import { VehicleSize } from './VehicleSize'

export class Level {
  private floor: number
  private spots: ParkingSpot[]
  public availableSpots: number = 0 // number of free spots
  private static readonly SPOTS_PER_ROW: number = 10

  public constructor(flr: number, numberSpots: number) {
    this.floor = flr
    this.spots = []
    const largeSpots = numberSpots / 4
    const bikeSpots = numberSpots / 4
    const compactSpots = numberSpots - largeSpots - bikeSpots
    for (let i = 0; i < numberSpots; i++) {
      let sz: VehicleSize = VehicleSize.Motorcycle
      if (i < largeSpots) {
        sz = VehicleSize.Large
      } else if (i < largeSpots + compactSpots) {
        sz = VehicleSize.Compact
      }
      const row = i / Level.SPOTS_PER_ROW
      this.spots[i] = new ParkingSpot(this, row, i, sz)
    }
    this.availableSpots = numberSpots
  }

  /* Try to find a place to park this vehicle. Return false if failed. */
  public parkVehicle(vehicle: Vehicle): boolean {
    if (this.availableSpots < vehicle.getSpotsNeeded()) {
      return false
    }
    const spotNumber = this.findAvailableSpots(vehicle)
    if (spotNumber < 0) {
      return false
    }
    return this.parkStartingAtSpot(spotNumber, vehicle)
  }

  /* Park a vehicle starting at the spot spotNumber, and continuing until vehicle.spotsNeeded. */
  private parkStartingAtSpot(spotNumber: number, vehicle: Vehicle): boolean {
    vehicle.clearSpots()
    let success = true
    for (let i = spotNumber; i < spotNumber + vehicle.spotsNeeded; i++) {
      success = !!this.spots[i].park(vehicle)
    }
    this.availableSpots -= vehicle.spotsNeeded
    return success
  }

  /* find a spot to park this vehicle. Return index of spot, or -1 on failure. */
  private findAvailableSpots(vehicle: Vehicle): number {
    const spotsNeeded = vehicle.getSpotsNeeded()
    let lastRow = -1
    let spotsFound = 0
    for (let i = 0; i < this.spots.length; i++) {
      const spot = this.spots[i]
      if (lastRow != spot.getRow()) {
        spotsFound = 0
        lastRow = spot.getRow()
      }
      if (spot.canFitVehicle(vehicle)) {
        spotsFound++
      } else {
        spotsFound = 0
      }
      if (spotsFound == spotsNeeded) {
        return i - (spotsNeeded - 1)
      }
    }
    return -1
  }

  public print(): void {
    let lastRow = -1
    for (let i = 0; i < this.spots.length; i++) {
      const spot = this.spots[i]
      if (spot.getRow() != lastRow) {
        console.log('  ')
        lastRow = spot.getRow()
      }
      spot.print()
    }
  }

  /* When a car was removed from the spot, increment availableSpots */
  public spotFreed(): void {
    this.availableSpots++
  }
}
