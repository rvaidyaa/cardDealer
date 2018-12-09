var express = require("express");
var router = express.Router();
var Deck = require('../Deck')

//default ordered deck built
let deck = new Deck();

//gets the current deck
router.get("/",  (req, res) => {
  res.status(200).json({ deck });
});
//shuffles cards
router.get("/shuffle",  (req, res) => {
  deck.rebuildDeck();
  deck.shuffle();
  res.status(200).json({ deck });
});
//shuffles only remaining cards in deck 
router.get("/shuffle-remaining",  (req, res) => {
  deck.shuffle();
  res.status(200).json({ deck });
});
//deals top card
router.get("/deal",  (req, res) => {
  deck.deal()
  res.status(200).json({deck});
});
//discards specific card
router.delete("/discard/:card",  (req, res) => {
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
router.post("/cut/:id", async (req, res) => {
  console.log(req.params.id);
  let cutIndex = req.params.id
  deck.cut(cutIndex);
  res.status(200).json({deck});
});
//reorders the deck to the default order without including the discarded cards
router.get("/order", async (req, res) => {
  deck.rebuildDeck();
  res.status(200).json({ deck });
});
module.exports = router;
