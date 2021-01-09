import { Card } from './Card'
import { Suit } from './Suit'

export class BlackJackCard extends Card {
  constructor(c: number, s: Suit) {
    super(c, s)
  }

  public value(): number {
    if (this.isAce()) {
      // Ace
      return 1
    } else if (this.isFaceCard()) {
      // Face card
      return 10
    } else {
      // Number card
      return this.faceValue
    }
  }

  public minValue(): number {
    if (this.isAce()) {
      // Ace
      return 1
    } else {
      return this.value()
    }
  }

  public maxValue(): number {
    if (this.isAce()) {
      // Ace
      return 11
    } else {
      return this.value()
    }
  }

  public isAce(): boolean {
    return this.faceValue == 1
  }

  public isFaceCard(): boolean {
    return this.faceValue >= 11 && this.faceValue <= 13
  }
}
