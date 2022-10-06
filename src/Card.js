class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  show(parent) {
    let divForCard = document.createElement('div');
    divForCard.innerText = `${this.suit} ${this.value}`;
    divForCard.classList.add('card');
    if (this.suit === '♥' || this.suit === '♦') divForCard.classList.add('red');
    parent.appendChild(divForCard);
  }
}