import { BlackJackCard } from './BlackJackCard'
import { BlackJackHand } from './BlackJackHand'
import { Deck } from './Deck'
import { Suit } from './Suit'

export class BlackJackGameAutomator {
  private deck: Deck<BlackJackCard> | null = null
  private hands: BlackJackHand[]
  private static HIT_UNTIL: number = 16

  public constructor(numPlayers: number) {
    this.hands = []
    for (let i = 0; i < numPlayers; i++) {
      this.hands[i] = new BlackJackHand()
    }
  }

  public dealInitial(): boolean {
    for (const hand of this.hands) {
      const card1: BlackJackCard = this.deck!.dealCard()!
      const card2: BlackJackCard = this.deck!.dealCard()!
      if (card1 == null || card2 == null) {
        return false
      }
      hand.addCard(card1)
      hand.addCard(card2)
    }
    return true
  }

  public getBlackJacks(): Array<number> {
    const winners: number[] = []
    for (let i = 0; i < this.hands.length; i++) {
      if (this.hands[i].isBlackJack()) {
        winners.push(i)
      }
    }
    return winners
  }

  public playHand(i: number): boolean {
    const hand: BlackJackHand = this.hands[i]
    return this.playHand1(hand)
  }

  public playHand1(hand: BlackJackHand): boolean {
    while (hand.score() < BlackJackGameAutomator.HIT_UNTIL) {
      const card: BlackJackCard = this.deck!.dealCard()!
      if (card == null) {
        return false
      }
      hand.addCard(card)
    }
    return true
  }

  public playAllHands(): boolean {
    for (const hand of this.hands) {
      if (!this.playHand1(hand)) {
        return false
      }
    }
    return true
  }

  public getWinners(): number[] {
    const winners: number[] = []
    let winningScore = 0
    for (let i = 0; i < this.hands.length; i++) {
      const hand: BlackJackHand = this.hands[i]
      if (!hand.busted()) {
        if (hand.score() > winningScore) {
          winningScore = hand.score()
          winners.length = 0
          winners.push(i)
        } else if (hand.score() == winningScore) {
          winners.push(i)
        }
      }
    }
    return winners
  }

  public initializeDeck(): void {
    const cards: BlackJackCard[] = []
    for (let i = 1; i <= 13; i++) {
      for (let j = 0; j <= 3; j++) {
        const card: BlackJackCard = new BlackJackCard(i, j)
        cards.push(card)
      }
    }

    this.deck = new Deck<BlackJackCard>()
    this.deck.setDeckOfCards(cards)
    this.deck.shuffle()
  }

  public printHandsAndScore(): void {
    for (let i = 0; i < this.hands.length; i++) {
      console.log('Hand ' + i + ' (' + this.hands[i].score() + '): ')
      this.hands[i].print()
      console.log('')
    }
  }
}
