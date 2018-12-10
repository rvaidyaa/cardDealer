const express = require("express");
const router = express.Router();
const Deck = require("../Deck");

//brand new deck object
let deck = new Deck();

//creates the deck, returns it
router.get("/", (req, res) => {
  if (deck["deck"].length != 0) {
    return res.status(500).json({
      message: "Deck already made, rebuild deck by '/rebuild' endpoint",
      deck
    });
  }
  deck.makeDeck();
  res.status(200).json({ message: "Success! Creating deck", deck });
});
//shuffles cards
router.get("/shuffle", (req, res) => {
  deck.rebuildDeck();
  deck.shuffle();
  if (deck["deck"].length == 0) {
    return res.status(500).json({
      message: "Internal Server error"
    });
  }
  res.status(200).json({message: "Success Deck shuffled", deck });
});
//shuffles only remaining cards in deck , returns deck
router.get("/shuffle-remaining", (req, res) => {
  if (deck["deck"].length == 0) {
    deck.makeDeck();
    deck.shuffle();
    return res.status(200).json({
      message:
        "Creating a deck, no cards are in the discard pile so simply shuffling all cards", deck
    });
  }
  if (deck["discardPile"].length == 0) {
    deck.shuffle();
    return res.status(200).json({
      message: "No cards are in the discard pile, simply shuffling all cards",
      deck
    });
  }
  deck.shuffle();
  res.status(200).json({message: "Shuffling all cards except discarded", deck });
});
//deals top card, returns deck
router.get("/deal", (req, res) => {
  if (deck["deck"].length == 0) {
    deck.makeDeck();
    deck.shuffle();
    deck.deal();
    return res.status(200).json({
      message:
        "No deck made, making default deck and shuffling, then dealing 1 card",
      deck
    });
  }
  deck.deal();
  res.status(200).json({ message: "Dealing one card", deck });
});
//discards specific card
router.delete("/discard/:card", (req, res) => {
  if (deck["deck"].length == 0) {
    deck.makeDeck();
    deck.discard(req.params.card);
    return res.status(200).json({ 
      message: `No deck made, creating a deck and discarding ${
        req.params.card
      }`,
      deck
    });
  }
  let discard_card = req.params.card;
  deck.discard(req.params.card);
  res.status(200).json({
    message: `Discarding ${req.params.card}`,
    deck
  });
});
//rebuild deck
router.get("/rebuild", async (req, res) => {
  deck.rebuildDeck();
  res.status(200).json({ message: "Rebuilding deck",deck });
});
//cut the deck at specified point
router.post("/cut/:number", async (req, res) => {
  // if its not a number

  if (deck["deck"].length == 0) {
    //If no deck is made make a deck
    deck.makeDeck();
    deck.shuffle();
    //create a random number i
    let m = deck["deck"].length - 1;
    let i = Math.floor(Math.random() * m);
    if (req.params.number <= 0) {
      // If number is negative
      deck.cut(i);
      return res.status(200).json({
        message: `No deck made, creating and shuffling deck. Number negative cutting randomly at ${i} `,
        deck
      });
    }
    if (req.params.number >= deck["deck"].length) {
      //Number is to large

      deck.cut(i);
      return res.status(200).json({
        message: `No deck made, creating and shuffling deck. Number greater than cards present cutting randomly at ${i} `,
        deck
      });
    }
    deck.cut(req.params.number); // Cut at said number
    return res.status(200).json({
      message: `Creating a deck shuffling and cutting at card number: ${
        req.params.number
      }`,
      deck
    });
  }
  //create a random number i
  let m = deck["deck"].length - 1;
  let i = Math.floor(Math.random() * m);
  if (req.params.number >= deck["deck"].length) {
    //Deck made but number to large
    deck.cut(i);
    return res.status(200).json({
      message: `Number greater than cards present cutting randomly at ${i} `,
      deck
    });
  }
  if (req.params.number <= 0) {
    // Deck made but number is negative
    deck.cut(i);
    return res.status(200).json({
      message: `Number negative cutting randomly at ${i} `,
      deck
    });
  }
  deck.cut(req.params.number); // Deck made cutting at said number
  res
    .status(200)
    .json({ message: `Cutting at card number: ${req.params.number}`, deck });
});
//reorders the deck to the default order without including the discarded cards
router.get("/order", async (req, res) => {
  deck.orderRemaining();
  res.status(200).json({ message: "Putting all cards back into default order without including discarded cards",deck });
});
router.post("/addJokers/:number", async (req, res) => {
  if (deck["deck"].length == 0) {
    deck.makeDeck();
    deck.shuffle();
    deck.addJokers(req.params.number);
    return res.status(200).json({
      message:
        `Creating a deck, shuffling and adding ${req.params.number} jokers to the deck`, deck
    });
  }
  console.log("inside get jokers");
  deck.addJokers(req.params.number);
  res.status(200).json({message:
    `Adding ${req.params.number} jokers to the deck`, deck });
});
module.exports = router;
