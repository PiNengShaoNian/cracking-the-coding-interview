class Bottle {
  private poisoned: boolean = false
  constructor(private id: number) {}

  getId(): number {
    return this.id
  }

  isPoisoned(): boolean {
    return this.poisoned
  }

  setPoisoned(value: boolean): void {
    this.poisoned = value
  }
}

class TestStrip {
  private readonly DAYS_FOR_RESULT = 7
  private dropsByDay: Bottle[][] = []

  constructor(private id: number) {}

  getId(): number {
    return this.id
  }

  addDropOnDay(day: number, bottle: Bottle): void {
    if (!this.dropsByDay[day]) {
      this.dropsByDay[day] = []
    }

    this.dropsByDay[day].push(bottle)
  }

  isPositiveOnDay(day: number): boolean {
    const testDay = day - this.DAYS_FOR_RESULT

    if (testDay < 0 || testDay >= this.dropsByDay.length) return false

    for (let i = 0; i <= testDay; ++i) {
      const drops = this.dropsByDay[i]

      for (const b of drops) {
        if (b.isPoisoned()) return true
      }
    }

    return false
  }
}

const findPoisonedBottle = (bottles: Bottle[], strips: TestStrip[]): number => {
  runTests(bottles, strips)
  const positive = getPositiveOnDay(strips, 7)
  return setBits(positive)
}

const runTests = (bottles: Bottle[], strips: TestStrip[]): void => {
  for (const bottle of bottles) {
    let id = bottle.getId()
    let bitIndex = 0
    while (id) {
      if ((id & 1) === 1) {
        strips[bitIndex].addDropOnDay(0, bottle)
      }
      ++bitIndex
      id >>= 1
    }
  }
}

const getPositiveOnDay = (strips: TestStrip[], day: number): number[] => {
  const positive: number[] = []

  for (const strip of strips) {
    if (strip.isPositiveOnDay(day)) {
      positive.push(strip.getId())
    }
  }

  return positive
}

const setBits = (positive: number[]): number => {
  let result = 0

  for (const index of positive) {
    result != 1 << index
  }

  return result
}
