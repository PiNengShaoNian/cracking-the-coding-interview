import MaxHeap from '../util/MaxHeap'
import { MinHeap } from '../util/MinHeap'

export class Median {
  private minPQ = new MinHeap<number>()
  private maxPQ = new MaxHeap<number>()

  input(num: number): void {
    if (this.maxPQ.size() < this.minPQ.size()) {
      const min = this.minPQ.min()

      if (typeof min === 'number' && min < num) {
        this.maxPQ.insert(this.minPQ.deleteMin())
        this.minPQ.insert(num)
      } else this.maxPQ.insert(num)
    } else {
      const max = this.maxPQ.max()

      if (typeof max === 'number' && num < max) {
        this.minPQ.insert(this.maxPQ.deleteMax())
        this.maxPQ.insert(num)
      } else this.minPQ.insert(num)
    }
  }

  median(): number {
    if (this.minPQ.isEmpty() && this.maxPQ.isEmpty()) return -1

    const isEven = (this.minPQ.size() + this.maxPQ.size()) % 2 === 0

    if (isEven) return (this.minPQ.min()! + this.maxPQ.max()!) / 2
    else return this.minPQ.min()!
  }
}
