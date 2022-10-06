let deck;
let dealer;
let player;
let score;

class Table {
  constructor() {
    this.table = document.createElement('div');
    this.nameGame = document.createElement('h1');
    this.buttonsDiv = document.createElement('div');
    this.hitMeButton = document.createElement('button');
    this.passButton = document.createElement('button');

    this.initTable();

    this.addDeck();
    this.addDealer();
    this.addPlayer();
    
    this.onClickHitMe(this.hitMeButton);
    this.onClickPass(this.passButton);
  }

  addButtons(parent) {
    this.hitMeButton.appendChild(document.createTextNode('Hit Me'));
    this.passButton.appendChild(document.createTextNode('Pass'));

    this.hitMeButton.classList.add('button');
    this.passButton.classList.add('button');
    this.buttonsDiv.classList.add('spotForButtons');

    this.buttonsDiv.appendChild(this.hitMeButton);
    this.buttonsDiv.appendChild(this.passButton);
    parent.appendChild(this.buttonsDiv);
  }

  addDealer() {
    dealer = new Dealer();
    dealer.show(this.table);
  }

  addDeck() {
    deck = new Deck();
    deck.show(this.table);
  }

  addPlayer() {
    player = new Player();
    player.show(this.table);
    this.addButtons(this.table);
  }

  compareScore() {

  }

  initTable() {
    this.table.classList.add('table');
    this.nameGame.appendChild(document.createTextNode('Black Jack'));

    document.body.appendChild(this.table);
    this.table.appendChild(this.nameGame);
  } 

  onClickHitMe(node) {
    node.addEventListener('click', () => {
      player.getCard(deck.cards);
      this.updateScoreSum(player.getCardsOnHand(),player.getScoreSum())
    });
  }

  onClickPass(node) {
    node.addEventListener('click', () => {
      // while(dealer.sumScore < 17)
      dealer.getCard(deck.cards);
      this.setScore(dealer.cardsOnHand);
      dealer.updateScoreSum();
    });
  }

  setScore(cards) {
    for (let i = 0; i < cards.length; i++) { 
      score = cards[i].value;
  
      if (typeof cards[i].value !== 'number') score = 10; 
      if (cards[i].value === 'A') score = 11; // || 1
      // scoreSum > 21 score = 1!!!
    }
    console.log(`this score single card: ${score}`);
    return score;
  }

  startGame() {
    dealer.getCard(deck.cards);
    this.setScore(dealer.cardsOnHand);
    dealer.updateScoreSum(score);
    // for (let i = 0; i < 2; i++) {
    //   player.getCard(deck.cards);
    //   this.setScore(player.cardsOnHand);
    // };   
  }
}

  
// updateScoreSum(cards, scoreSum) {
  // for (let i = 0; i < cards; i++) {
    // scoreSum += score;
  // }
  // console.log(scoreSum);
  // return scoreSum;
// }