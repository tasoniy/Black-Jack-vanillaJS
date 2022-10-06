const suits = ['♠', '♣', '♥', '♦'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

class Deck {
  constructor() {
    this.divDeck = document.createElement('div');
    this.cards = [];
    this.initDeck();
    this.shuffle();
  }

  initDeck() {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const card = new Card(suits[i], values[j]);
        this.cards.push(card);
      }
    }
    return this.cards;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  show(parent) {
    this.divDeck.classList.add('back');
    parent.appendChild(this.divDeck);
  }
}