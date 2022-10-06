class Dealer extends Player {
  constructor() {
    super();
    this.name = 'Dealer';
    this.isFirstCard = true;
  }

  getHiddenCard() {
    this.cardsOnHand[0].classList.add('back');
    this.isFirstCard = false;
  }

  showHiddenCard() {
    this.cardsOnHand[0].classList.add('card');
  }
}