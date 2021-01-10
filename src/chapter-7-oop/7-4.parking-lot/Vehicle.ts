import { ParkingSpot } from './ParkingSpot'
import { VehicleSize } from './VehicleSize'

export abstract class Vehicle {
  public parkingSpots: ParkingSpot[] = []
  public licensePlate: string = ''
  public spotsNeeded: number = 0
  public size: VehicleSize = 0

  public getSpotsNeeded(): number {
    return this.spotsNeeded
  }

  public getSize(): VehicleSize {
    return this.size
  }

  /* Park vehicle in this spot (among others, potentially) */
  public parkInSpot(spot: ParkingSpot): void {
    this.parkingSpots.push(spot)
  }

  /* Remove car from spot, and notify spot that it's gone */
  public clearSpots(): void {
    for (let i = 0; i < this.parkingSpots.length; i++) {
      this.parkingSpots[i].removeVehicle()
    }
    this.parkingSpots.length = 0
  }

  public abstract canFitInSpot(spot: ParkingSpot): boolean
  public abstract print(): void
}
