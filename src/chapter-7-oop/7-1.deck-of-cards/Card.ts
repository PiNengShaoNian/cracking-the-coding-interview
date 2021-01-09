import { Suit } from './Suit'

export abstract class Card {
  private available: boolean = true
  constructor(protected faceValue: number, protected _suit: Suit) {}

  abstract value(): number

  suit(): Suit {
    return this._suit
  }

  isAvailable(): boolean {
    return this.available
  }

  markUnavailable() {
    this.available = false
  }

  markAvailable() {
    this.available = true
  }

  print(): void {
    const faceValues = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
    ]

    switch (this._suit) {
      case Suit.Club:
        console.log('c')
        break
      case Suit.Heart:
        console.log('h')
        break
      case Suit.Diamond:
        console.log('d')
        break
      case Suit.Spade:
        console.log('s')
        break
    }

    console.log(' ')
  }
}
