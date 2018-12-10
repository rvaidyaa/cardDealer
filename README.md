# cardDealer - Instructions
-npm install
-npm start


## Initial UX
User Stories
* Make Deck: makes a deck in the default sort order [spades,hearts,clubs,diamonds] 2-A;
* Deal a Card : Deals one card off the top of the deck, if no deck is made, creates a fresh deck, shuffles and deals one card of the top. If no deck is made , creates a deck, shuffles and does the former.
* Shuffle : Randomize all the cards remaining in the deck and that are in the discard pile. If no deck is made , creates a deck, shuffles and does the former.
* Shuffle Remaining: Shuffles only cards that are remaining in the deck, if no cards are in the discard pile it works the same as shuffle. If no deck is made , creates a deck, shuffles and does the former.
* Discard : Specify a dealt card that is to be sent to the discard pile. If no deck is made , creates a deck and does the former. Does not shuffle.
* Cut: Specify a number of cards to cut; Example :4 Will take the top four cards and put it on the bottom. If no deck is made , creates a deck, shuffles and does the former. Needs atleast one card to cut. Numbers greater than the number of cards in the deck or numbers less than 0 will cut the deck randomly.
* Order: Order all the remaining cards back into default order without including discarded cards
* Rebuild Deck: Puts the deck back into the default sort order with an empty discard pile
* Add Jokers: Adds x number of Jokers to the deck , if no Deck is made, makes a deck and adds jokers
* Set wild card: Changes card into Joker (future date)

## API Documentation

API endpoints for the back end 
* GET to '/' : Make Deck
* GET to '/shuffle' : Shuffle
* GET to '/shuffle-remaining' : Shuffle Remaining
* GET to '/deal' : Deal a Card
* DELETE to '/discard/:card' : Discard 
* GET to '/rebuild' : Rebuild Deck
* POST to '/cut/:id' : Cut, (enter a negative number or a number greater than the cards left in the deck)
* GET to '/order' : Order
* POST to '/addJokers/:number' : Add Jokers


### Revelant Technologies

* Node.js
* Express.js
* Nodemon
* Express-generator


## Testing 

"https://mochajs.org/"  "http://chaijs.com/"

## To Do:
* Use Joi to validate