import shuffle from 'lodash/shuffle';

const cards = [
  { text: 'a', audioUrl: '/audio/a.mp3' },
  { text: 'and', audioUrl: '/audio/and.mp3' },
  { text: 'be', audioUrl: '/audio/be.mp3' },
  { text: 'I', audioUrl: '/audio/i.mp3' },
  { text: 'in', audioUrl: '/audio/in.mp3' },
  { text: 'it', audioUrl: '/audio/it.mp3' },
  { text: 'of', audioUrl: '/audio/of.mp3' },
  { text: 'that', audioUrl: '/audio/that.mp3' },
  { text: 'the', audioUrl: '/audio/the.mp3' },
  { text: 'to', audioUrl: '/audio/to.mp3' },
  { text: 'was', audioUrl: '/audio/was.mp3' },
];

export class FlashCards {
  private _currentCard = -1;
  private _cards = [];

  public getNextCard() {
    if (this._currentCard === -1) {
      this._cards = shuffle(cards);
    }

    this._currentCard++;
    if (this._currentCard > this._cards.length) {
      this._currentCard = 0;
    }

    return this._cards[this._currentCard];
  }

  public getProgress() {
    const card = this._currentCard + 1;
    const cardCount = this._cards.length;
    return { card, cardCount };
  }
}
