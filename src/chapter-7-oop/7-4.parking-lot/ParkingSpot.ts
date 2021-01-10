import { Level } from './Level'
import { Vehicle } from './Vehicle'
import { VehicleSize } from './VehicleSize'

export class ParkingSpot {
  private vehicle: Vehicle | null = null
  private spotSize: VehicleSize
  private row: number
  private spotNumber: number
  private level: Level

  public constructor(lvl: Level, r: number, n: number, sz: VehicleSize) {
    this.level = lvl
    this.row = r
    this.spotNumber = n
    this.spotSize = sz
  }

  public isAvailable(): boolean {
    return this.vehicle == null
  }

  /* Checks if the spot is big enough for the vehicle (and is available). This compares
   * the SIZE only. It does not check if it has enough spots. */
  public canFitVehicle(vehicle: Vehicle): boolean {
    return this.isAvailable() && vehicle.canFitInSpot(this)
  }

  /* Park vehicle in this spot. */
  public park(v: Vehicle): boolean {
    if (!this.canFitVehicle(v)) {
      return false
    }
    this.vehicle = v
    this.vehicle.parkInSpot(this)
    return true
  }

  public getRow(): number {
    return this.row
  }

  public getSpotNumber(): number {
    return this.spotNumber
  }

  public getSize(): VehicleSize {
    return this.spotSize
  }

  /* Remove vehicle from spot, and notify level that a new spot is available */
  public removeVehicle(): void {
    this.level.spotFreed()
    this.vehicle = null
  }

  public print(): void {
    if (this.vehicle == null) {
      if (this.spotSize == VehicleSize.Compact) {
        console.log('c')
      } else if (this.spotSize == VehicleSize.Large) {
        console.log('l')
      } else if (this.spotSize == VehicleSize.Motorcycle) {
        console.log('m')
      }
    } else {
      this.vehicle.print()
    }
  }
}
