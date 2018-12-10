# cardDealer - Instructions
-npm install
-npm start


## Initial UX
User Stories
* Make Deck: makes a deck in the default sort order [spades,hearts,clubs,diamonds] 2-A;
* Shuffle : Randomize all the cards remaining in the deck and that are in the discard pile. If no deck is made , creates a deck, shuffles and does the former. Will remove wild cards and jokers.
* Shuffle Remaining: Shuffles only cards that are remaining in the deck, if no cards are in the discard pile it works the same as shuffle. If no deck is made , creates a deck, shuffles and does the former. Keeps wild cards and jokers.
* Deal a Card : Deals one card off the top of the deck. If no deck is made , creates a deck, shuffles and does the former.
* Discard : Specify a dealt card that is to be sent to the discard pile. If no deck is made , creates a deck and does the former. Does not shuffle.
* Rebuild Deck: Puts the deck back into the default sort order with an empty discard pile
* Cut: Specify a number of cards to cut. Will take the top x number of cards and put it on the bottom. If no deck is made , creates a deck, shuffles and does the former. Needs at least one card to cut. Numbers greater than the number of cards in the deck or numbers less than 0 will cut the deck randomly.
* Order: Order all the remaining cards back into default order without including discarded cards.
* Add Jokers: Adds x number of Jokers to the deck , if no Deck is made, makes a deck and adds jokers.
* Set wild card: Changes card into Joker .

## API Documentation

API endpoints for the back end 
* Make Deck: GET to '/' 
* Shuffle: GET to '/shuffle' 
* Shuffle Remaining: GET to '/shuffle-remaining' 
* Deal a Card: GET to '/deal' 
* Discard: DELETE to '/discard/:card'  
* Rebuild Deck: GET to '/rebuild' 
* Cut: POST to '/cut/:id' 
* Order: GET to '/order' 
* Add Jokers: POST to '/addJokers/:number' 
* Set wild card: PUT to '/set-wildcard/:card' 


### Revelant Technologies

* Node.js
* Express.js
* Nodemon
* Express-generator


## Testing 

"https://mochajs.org/"  "http://chaijs.com/"

## To Do:
* Use Joi to validate
* Try to break it more, more error handling
* Better tests