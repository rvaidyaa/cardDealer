const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../app');

const should = chai.should();

chai.use(chaiHttp);


describe('cardDealer', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  it('Should create a new deck on GET "/"', function() {
    // recall that we manually add some recipes to `Recipes`
    // inside `recipesRouter.js`. Later in this course,
    // once we're using a database layer, we'll seed
    // our database with test data, and we can form our expectations
    // about what GET should return, based on what we know about
    // the state of our database.
    return chai.request(app)
      .get('/')
      .then(function(res) {

        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');

        res.body["deck"].deck.should.have.length.of.at.least(52);

        // each item should be an object with key/value pairs
        // for `id`, `name` and `ingredients`.
        
      });
  });
});