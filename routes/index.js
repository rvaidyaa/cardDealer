var express = require("express");
var router = express.Router();

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

    for (let suit in suites) {
      for (let value in values) {
        this.deck.push(`${values[value]}-of-${suites[suit]}`);
      }
    }
  }
  shuffle() {
    const { deck } = this;
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
        this.discardPile.push(cardToDiscard);
        
      }
    }
  }
  cut(cutValue){

  }
  rebuildDeck(){
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

    for (let suit in suites) {
      for (let value in values) {
        this.deck.push(`${values[value]}-of-${suites[suit]}`);
      }
    }
  }
}
const deck = new Deck();


//gets the current deck
router.get("/", async (req, res) => {
  res.status(200).json({ deck });
});
//shuffles cards
router.get("/shuffle", async (req, res) => {
  deck.shuffle();
  res.status(200).json({ deck });
});
//deals top card
router.get("/deal", async (req, res) => {
  deck.deal()
  res.status(200).json({deck});
});
//discards specific card
router.delete("/discard/:card", async (req, res) => {
  let discard_card = req.params.card;
  console.log(discard_card)
  deck.discard(discard_card);
  res.status(200).json({ deck });
});
//rebuild deck
router.get("/rebuild", async (req, res) => {
  deck.rebuildDeck();
  res.status(200).json({ deck });
});
//cut the deck at specified point
router.get("/cut/:id", async (req, res) => {
  let cutValue = req.params.id
  deck.cut(cutValue);
});

module.exports = router;
