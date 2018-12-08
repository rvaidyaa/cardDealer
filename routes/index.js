var express = require("express");
var router = express.Router();



class Deck {
  constructor(){
    this.deck =[];

    const suites = ['Spades','Hearts','Clubs','Diamonds'];
    const values = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace']

    for (let suit in suites){
      for(let value in values){
        this.deck.push(`${values[value]} of ${suites[suit]}`);
      }
    }
  }
};
const default_order = new Deck();


let discard = [];
router.get("/", async (req, res) =>{
  res.status(200).json({default_order});

});
router.get("/shuffle", async (req, res) =>{
  res.status(200).json({ordered});
});
router.post("/discard/:card", async (req, res) => {
  let discard = req.params.card;
  discard.push(discard);


});
module.exports = router;
