export interface Comparable<T> {
  compareTo(that: T): number
  equals(that: T): boolean
}
