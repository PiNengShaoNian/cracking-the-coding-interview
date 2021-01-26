import { Queue } from '../../util/Queue'
import { Comparable } from './Comparable'
import { hash } from './hash'
import { SequentialSearchSymbolTable } from './SequentialSearchSymbolTable'

export class SeparateChainingHashTable<
  Key extends string | number | Comparable<Key>,
  Value
> {
  private readonly PRIMES: number[] = [
    1,
    1,
    3,
    7,
    13,
    31,
    61,
    127,
    251,
    509,
    1021,
    2039,
    4093,
    8191,
    16381,
    32749,
    65521,
    131071,
    262139,
    524287,
    1048573,
    2097143,
    4194301,
    8388593,
    16777213,
    33554393,
    67108859,
    134217689,
    268435399,
    536870909,
    1073741789,
    2147483647,
  ]
  private averageListSize: number
  private _size: number
  private keysSize: number = 0
  private symbolTable: SequentialSearchSymbolTable<Key, Value>[]
  private lgM: number

  constructor(initialSize: number = 997, averageListSize = 5) {
    this._size = initialSize
    this.averageListSize = averageListSize
    this.symbolTable = Array.from(
      { length: initialSize },
      () => new SequentialSearchSymbolTable()
    )

    this.lgM = (Math.log(this._size) / Math.log(2)) >> 0
  }

  hash(key: Key) {
    let hashCode = hash(key) >>> 0

    if (this.lgM < 26) {
      hashCode = hashCode % this.PRIMES[this.lgM + 5]
    }

    return hashCode % this._size
  }

  getLoadFactor() {
    return this.keysSize / this._size
  }

  size() {
    return this.keysSize
  }

  isEmpty() {
    return this.keysSize === 0
  }

  get(key: Key): Value | null {
    return this.symbolTable[this.hash(key)].get(key)
  }

  contains(key: Key): boolean {
    return this.get(key) !== null
  }

  delete(key: Key): void {
    if (this.isEmpty() || !this.contains(key)) return

    this.symbolTable[this.hash(key)].delete(key)
    this.keysSize--

    if (this._size > 1 && this.getLoadFactor() <= this.averageListSize / 4) {
      this.resize(this._size >> 1)
      this.lgM--
    }
  }

  put(key: Key, value: Value | null): void {
    if (value === null) {
      this.delete(key)
      return
    }

    const hashIndex = this.hash(key)
    const currentSize = this.symbolTable[hashIndex].size()
    this.symbolTable[hashIndex].put(key, value)

    if (currentSize < this.symbolTable[hashIndex].size()) {
      this.keysSize++
    }

    if (this.getLoadFactor() > this.averageListSize) {
      this.resize(this._size * 2)
      this.lgM++
    }
  }

  resize(newSize: number): void {
    const separateChainingHashTableTemp = new SeparateChainingHashTable<
      Key,
      Value
    >(newSize, this.averageListSize)

    for (const key of this.keys()) {
      separateChainingHashTableTemp.put(key, this.get(key))
    }

    this.symbolTable = separateChainingHashTableTemp.symbolTable
    this._size = separateChainingHashTableTemp._size
  }

  keys(): Iterable<Key> {
    const keys = new Queue<Key>()

    for (const st of this.symbolTable) {
      for (const key of st.keys()) {
        keys.enqueue(key)
      }
    }

    return keys
  }
}
