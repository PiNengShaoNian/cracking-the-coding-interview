import { ParkingSpot } from './ParkingSpot'
import { Vehicle } from './Vehicle'
import { VehicleSize } from './VehicleSize'

export class Motorcycle extends Vehicle {
  public Motorcycle() {
    this.spotsNeeded = 1
    this.size = VehicleSize.Motorcycle
  }

  public canFitInSpot(_: ParkingSpot): boolean {
    return true
  }

  public print(): void {
    console.log('M')
  }
}
