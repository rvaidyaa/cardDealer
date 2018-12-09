class Deck {
    constructor() {
      this.deck = [];
      this.discardPile = [];
  
      const suites = ["Spades", "Hearts", "Clubs", "Diamonds"];
      const values = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ];
  
      for (let suit in suites) { // loop through each suite
        for (let value in values) { //loop through each value pushing that value and suit into the deck
          this.deck.push(`${values[value]}-of-${suites[suit]}`);
        }
      }
    }
    shuffle() {
      const { deck } = this; //
      let m = deck.length,
        i;
  
      while (m) {
        i = Math.floor(Math.random() * m--);
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
      return this;
    }
    deal() {
      return this.deck.shift();
    }
    discard(discard_card){
      for (let card in this.deck){
        console.log(this.deck[card])
        if (this.deck[card] == discard_card){
          let cardToDiscard = this.deck.splice(card,1);
          this.discardPile.push(cardToDiscard.toString());
          
        }
      }
    }
    cut(cutIndex){
      let firstCut = this.deck.splice(0,cutIndex);
      return this.deck = [...this.deck,...firstCut];
    }
    rebuildDeck(){
      this.deck = []; // fresh deck
      this.discardPile = []; //fresh discard pile
  
      const suites = ["Spades", "Hearts", "Clubs", "Diamonds"];
      const values = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ];
  
      for (let suit in suites) {
        for (let value in values) {
          this.deck.push(`${values[value]}-of-${suites[suit]}`);
        }
      }
    }
  }

module.exports = Deck;