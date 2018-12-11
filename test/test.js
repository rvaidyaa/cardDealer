const chai = require("chai");
const chaiHttp = require("chai-http");

const { app, runServer, closeServer } = require("../app");

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe("cardDealer", function() {
  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('Should create a new deck on GET "/"', function() {
    return chai
      .request(app)
      .get("/")
      .then(function(res) {
        let deck = res.body["deck"].deck;

        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        deck.should.have.length.of.at.least(52);
          //if the first 5 cards are = to default order assume its not shuffled therefor it must be default order
        expect(deck[0]).to.equal("2-of-Spades");
        expect(deck[1]).to.equal("3-of-Spades");
        expect(deck[2]).to.equal("4-of-Spades");
        expect(deck[3]).to.equal("5-of-Spades");
        expect(deck[4]).to.equal("6-of-Spades");
      });
  });
  it('Should shuffle deck on GET "/shuffle"', function() {
    return chai
      .request(app)
      .get("/shuffle")
      .then(function(res) {
        let deck = res.body["deck"].deck;

        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body["deck"].deck.should.have.length.of.at.least(52);
        // 1 out of 52 a shuffled deck will have its first card as 2-of-spades
        expect(deck[0]).to.not.equal("2-of-spades");
      });
  });
  it('Should shuffle-remaining deck on GET "/shuffle-remaining"', function() {
    return chai
      .request(app)
      .get("/shuffle-remaining")
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        res.body["deck"].deck.should.have.length.of.at.least(1);
      });
  });
  it('Should deal a card on GET "/deal"', function() {
    return chai
      .request(app)
      .get("/deal")
      .then(function(res) {
        let deck = res.body["deck"].deck;
        console.log('deck length is:',deck.length)
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        //length of deck should go down by 1 since a card is dealt
        expect(deck.length).equal(51);
      });
  });
  it('Should deal a second card on GET "/deal"', function() {
    return chai
      .request(app)
      .get("/deal")
      .then(function(res) {
        let deck = res.body["deck"].deck;

        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        //length of deck should go down by 1 since a card is dealt, now its 50 down from 52 , 2 cards dealt
        expect(res.body["deck"].deck.length).equal(50);
      });
  });
  it('Should discard said card on DELETE "/discard/saidCard"', function() {
    return chai
      .request(app)
      .delete("/discard/2-of-Spades")
      .then(function(res) {
        let deck = res.body["deck"];
        
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        //discard pile should have 1 card in it and it should be 2 of spades
        expect(deck.discardPile.length).equal(1);
        expect(deck.discardPile[0]).equal('2-of-Spades')
      });
  });
  it('Should add 4 jokers on POST "/addJokers/4"', function() {
    return chai
      .request(app)
      .post("/addJokers/4")
      .then(function(res) {
        let deck = res.body["deck"];
        
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("object");
        // started with 52 cards, dealt 2, discarded 1 added 4 jokers so total length 53
        // expect the last 4 cards to be jokers
        expect(deck.deck.length).equal(53);
        expect(deck.deck[49]).equal('Joker')
        expect(deck.deck[50]).equal('Joker')
        expect(deck.deck[51]).equal('Joker')
        expect(deck.deck[52]).equal('Joker')
      });
  });
});
