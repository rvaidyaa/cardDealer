var express = require("express");
var router = express.Router();

let ordered = [
  "2-s",
  "3-s",
  "4-s",
  "5-s",
  "6-s",
  "7-s",
  "8-s",
  "9-s",
  "T-s",
  "J-s",
  "Q-s",
  "K-s",
  "A-s",
  "2-h",
  "3-h",
  "4-h",
  "5-h",
  "6-h",
  "7-h",
  "8-h",
  "9-h",
  "T-h",
  "J-h",
  "Q-h",
  "K-h",
  "A-h",
  "2-c",
  "3-c",
  "4-c",
  "5-c",
  "6-c",
  "7-c",
  "8-c",
  "9-c",
  "T-c",
  "J-c",
  "Q-c",
  "K-c",
  "A-c",
  "2-d",
  "3-d",
  "4-d",
  "5-d",
  "6-d",
  "7-d",
  "8-d",
  "9-d",
  "T-d",
  "J-d",
  "Q-d",
  "K-d",
  "A-d"
];

let discard = [];
router.get("/", async (req, res) =>{
  res.status(200).json({ordered});
});
router.post("/discard/:card", async (req, res) => {
  let discard = req.params.card;
  discard.push

});
module.exports = router;
