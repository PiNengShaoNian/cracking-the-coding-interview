import { ParkingSpot } from './ParkingSpot'
import { Vehicle } from './Vehicle'
import { VehicleSize } from './VehicleSize'

export class Car extends Vehicle {
  public Car() {
    this.spotsNeeded = 1
    this.size = VehicleSize.Compact
  }

  public canFitInSpot(spot: ParkingSpot): boolean {
    return (
      spot.getSize() == VehicleSize.Large ||
      spot.getSize() == VehicleSize.Compact
    )
  }

  public print(): void {
    console.log('C')
  }
}
