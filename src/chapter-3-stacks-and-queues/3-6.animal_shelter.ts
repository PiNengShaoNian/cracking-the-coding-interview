import { Queue } from '../util/Queue'

type AnimalType = 'DOG' | 'CAT'
type QueueItem = {
  type: AnimalType
  timestamp: number
  name: string
}

export class AnimalShelter {
  private queueDog: Queue<QueueItem> = new Queue()
  private queueCat: Queue<QueueItem> = new Queue()
  private id = 0

  enqueue(type: AnimalType, name: string): void {
    if (type === 'DOG') {
      this.queueDog.enqueue({
        type: 'DOG',
        timestamp: this.id++,
        name,
      })
    } else {
      this.queueCat.enqueue({
        type: 'CAT',
        timestamp: this.id++,
        name,
      })
    }
  }

  dequeueAny(): string {
    if (this.queueDog.isEmpty() && this.queueCat.isEmpty()) {
      throw new Error('Empty queue')
    }

    if (this.queueCat.isEmpty()) {
      return this.queueDog.dequeue()!.name
    }

    if (this.queueDog.isEmpty()) {
      return this.queueCat.dequeue()!.name
    }

    return this.queueCat.front()!.timestamp > this.queueDog.front()!.timestamp
      ? this.queueDog.dequeue()!.name
      : this.queueCat.dequeue()!.name
  }

  dequeueDog(): string {
    if (this.queueDog.isEmpty()) throw new Error('Empty queue')

    return this.queueDog.dequeue()!.name
  }

  dequeueCat(): string {
    if (this.queueCat.isEmpty()) throw new Error('Empty queue')

    return this.queueCat.dequeue()!.name
  }
}
