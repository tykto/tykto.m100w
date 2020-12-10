import shuffle from 'lodash/shuffle';

export class CardDeck {
  private _currentCard = -1;

  public constructor(private cards: any) {}

  public getNextCard() {
    if (this._currentCard === -1) {
      this.cards = shuffle(this.cards);
    }

    this._currentCard++;
    if (this._currentCard >= this.cards.length) {
      this._currentCard = 0;
    }

    return this.cards[this._currentCard];
  }

  public getProgress() {
    const card = this._currentCard + 1;
    const cardCount = this.cards.length;
    return { card, cardCount };
  }
}
