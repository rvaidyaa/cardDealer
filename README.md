# cardDealer



## Initial UX
User Stories

* Deal Card : Deals 1 card off the top of the deck
* Shuffle : Randomize all the cards remaining in the deck and that are in the discard pile
* Discard : Specify a dealt card that is to be sent to the discard pile
* Cut: Specify a number of cards to cut, Example :4 will take the top 4 cards and put it on the bottom 
* Order: Order all the remaining cards 
* Rebuild Deck: 
* Shuffle Remaining: Shuffles only cards that are remaining in the deck
* Set wild card: Changes card into Joker
* Add Jokers: Adds x number of Jokers to the deck

## API Documentation

API endpoints for the back end include:
* POST to '/workouts' to get user selected workout
* GET to '/exercises' to get exercises pertaining to the workout and display them on calendar
* POST to '/customexercises' to add a custom exercise to the workout
* GET to '/get-custom-exercises' to disiplay the custom exercise on the calendar
* DELETE to '/delete-exercises' on refresh and start to clear custom exercises
* DELETE to '/delete-custom-exercise' to delete a custom exercise from workout

## Working Prototype



### Revelant Technologies

* Node.js
* Express.js
"https://mochajs.org/"  "http://chaijs.com/"


## Testing

