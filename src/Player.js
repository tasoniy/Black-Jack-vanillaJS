class Player {
  constructor() {
    this.name = 'Player';
    this.cardsSpot = document.createElement('div');
    this.scoreP = document.createElement('p');
    this.cardsOnHand = [];
    this.scoreSum = 0;
    this.canGetCard = true;
  }

  getCard(cards) {
    const lastCard = cards[cards.length - 1];
    cards.pop(lastCard);
    this.cardsOnHand.push(lastCard);
    lastCard.show(this.cardsSpot);
    return this.cardsOnHand;
  }

  updateScoreSum(scor) {
    for (let i = 0; i < this.cardsOnHand; i++) {
      this.scoreSum = this.scoreSum + scor;
    }
    console.log(`this sum score: ${this.scoreSum}`)
    return this.scoreSum;
  }

  show(parent) {
    this.cardsSpot.classList.add('spot');

    this.scoreP.classList.add('text');
    this.scoreP.appendChild(document.createTextNode(
      `${this.name} score: ${this.scoreSum}`
    ));

    parent.appendChild(this.scoreP);
    this.cardsSpot.appendChild(document.createTextNode(`${this.name} cards: `));

    parent.appendChild(this.cardsSpot);
  }
}
