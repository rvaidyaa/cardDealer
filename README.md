# cardDealer 
This is a node.js api for dealing cards. Can be used to power many different card games. Users can request the api to make a deck, shuffle, cut the deck, deal a card, discard a card and much more!
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Endpoints
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

### API Documentation

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


### Testing 

"https://mochajs.org/"  "http://chaijs.com/"

## To Do:
* Use Joi to validate
* Try to break it more, more error handling
* Better tests


# Project Title

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc