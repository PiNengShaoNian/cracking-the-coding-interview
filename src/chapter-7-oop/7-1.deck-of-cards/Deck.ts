import { uniform } from '../../util/uniform'
import { Card } from './Card'

export class Deck<T extends Card> {
  private cards: T[] = []
  private dealtIndex: number = 0 // marks first undealt card

  setDeckOfCards(deckOfCards: T[]): void {
    this.cards = deckOfCards
  }

  shuffle(): void {
    for (let i = 0; i < this.cards.length; i++) {
      const j = uniform(i, this.cards.length - i - 1)
      const card1: T = this.cards[i]
      const card2: T = this.cards[j]
      this.cards[i] = card2
      this.cards[j] = card1
    }
  }

  remainingCards(): number {
    return this.cards.length - this.dealtIndex
  }

  public dealHand(number: number): T[] | null {
    if (this.remainingCards() < number) {
      return null
    }

    const hand: T[] = []
    let count = 0
    while (count < number) {
      const card = this.dealCard()
      if (card != null) {
        hand[count] = card
        count++
      }
    }

    return hand
  }

  public dealCard(): T | null {
    if (this.remainingCards() == 0) {
      return null
    }

    const card = this.cards[this.dealtIndex]
    card.markUnavailable()
    this.dealtIndex++

    return card
  }

  public print(): void {
    for (const card of this.cards) {
      card.print()
    }
  }
}
