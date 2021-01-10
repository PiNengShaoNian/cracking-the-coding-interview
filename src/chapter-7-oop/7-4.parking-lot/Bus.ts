import { ParkingSpot } from './ParkingSpot'
import { Vehicle } from './Vehicle'
import { VehicleSize } from './VehicleSize'

export class Bus extends Vehicle {
  public Bus() {
    this.spotsNeeded = 5
    this.size = VehicleSize.Large
  }

  public canFitInSpot(spot: ParkingSpot): boolean {
    return spot.getSize() == VehicleSize.Large
  }

  public print(): void {
    console.log('B')
  }
}
