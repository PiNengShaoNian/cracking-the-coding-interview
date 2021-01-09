import { Card } from './Card'

export class Hand<T extends Card> {
  protected cards: Array<T> = []

  public score(): number {
    let score = 0
    for (const card of this.cards) {
      score += card.value()
    }
    return score
  }

  public addCard(card: T): void {
    this.cards.push(card)
  }

  public print(): void {
    for (const card of this.cards) {
      card.print()
    }
  }
}
