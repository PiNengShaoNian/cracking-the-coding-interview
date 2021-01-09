import { BlackJackCard } from './BlackJackCard'
import { Hand } from './Hand'

export class BlackJackHand extends Hand<BlackJackCard> {
  public score(): number {
    const scores: number[] = this.possibleScores()
    let maxUnder: number = Number.MAX_SAFE_INTEGER
    let minOver: number = Number.MAX_SAFE_INTEGER
    for (const score of scores) {
      if (score > 21 && score < minOver) {
        minOver = score
      } else if (score <= 21 && score > maxUnder) {
        maxUnder = score
      }
    }
    return maxUnder == Number.MAX_SAFE_INTEGER ? minOver : maxUnder
  }

  private possibleScores(): number[] {
    const scores: number[] = []
    if (this.cards.length == 0) {
      return scores
    }
    for (const card of this.cards) {
      this.addCardToScoreList(card, scores)
    }
    return scores
  }

  private addCardToScoreList(card: BlackJackCard, scores: number[]): void {
    if (scores.length == 0) {
      scores.push(0)
    }
    const length = scores.length
    for (let i = 0; i < length; i++) {
      const score = scores[i]
      scores[i] = score + card.minValue()
      if (card.minValue() != card.maxValue()) {
        scores.push(score + card.maxValue())
      }
    }
  }

  public busted(): boolean {
    return this.score() > 21
  }

  public is21(): boolean {
    return this.score() == 21
  }

  public isBlackJack(): boolean {
    if (this.cards.length != 2) {
      return false
    }
    const first: BlackJackCard = this.cards[0]
    const second: BlackJackCard = this.cards[1]
    return (
      (first.isAce() && second.isFaceCard()) ||
      (second.isAce() && first.isFaceCard())
    )
  }
}
