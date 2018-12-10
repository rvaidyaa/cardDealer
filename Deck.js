class Deck {
  constructor() {
    this.deck = [];
    this.discardPile = [];
  }
  addJokers(number){
    for (let i=0; i<number;i++){
      this.deck.push('Joker')
    }
  }
  cut(cutIndex) {
    let firstCut = this.deck.splice(0, cutIndex);
    return (this.deck = [...this.deck, ...firstCut]);
  }
  deal() {
    return this.deck.shift();
  }
  discard(discard_card) {
    // loop through every card in deck if that card is = to discarded card splice it off, then push into discard pile
    for (let card in this.deck) {
      if (this.deck[card] == discard_card) {
        let cardToDiscard = this.deck.splice(card, 1);
        this.discardPile.push(cardToDiscard.toString());//need to convert to a string
      }
    }
  }
  makeDeck() { //easily change the default order of the cards by swapping values in each array
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
      // loop through each suite
      for (let value in values) {
        //loop through each value pushing that value and suit into the deck
        this.deck.push(`${values[value]}-of-${suites[suit]}`);
      }
    }
  }
  orderRemaining() {
    this.deck = []; // fresh deck
    this.makeDeck(); //create a fresh deck
    let difference = [...this.deck].filter(
      card => !this.discardPile.includes(card)
    );
    
    return (this.deck = difference);
  }
  rebuildDeck() {
    this.deck = []; // fresh deck
    this.discardPile = []; //fresh discard pile
    this.makeDeck();
  }
  shuffle() {
    const { deck } = this; //object destructuring
    let m = deck.length,
      i;

    while (m) {
      //keeps going while m is
      i = Math.floor(Math.random() * m--); //multiply by the length, then subtract one
      [deck[m], deck[i]] = [deck[i], deck[m]]; // i is random gen value from 1 to length, then used to swap locations in array
    }
    return this;
  }
}

module.exports = Deck;
