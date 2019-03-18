var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	image: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	image: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	image: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	image: 'images/king-of-diamonds.png'
}];

var cardsInPlay = [];
var roundsWon = 0;
var roundsLost = 0;

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	roundsWon += 1;
	document.getElementById('wins').innerHTML = roundsWon.toString();
	} else {
	alert("Sorry, try again.");
	roundsLost += 1;
	document.getElementById('losses').innerHTML = roundsLost.toString();
	};
};

var flipCard = function(cardElement) {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].image);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].image);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

var createGame = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createGame();

var reset = function() {
	var oldBoard = document.getElementById('game-board');
	while (oldBoard.hasChildNodes()) {
		oldBoard.removeChild(oldBoard.firstChild);
	}
	createGame();
	cardsInPlay = [];
}

document.querySelector('button').addEventListener('click', reset);


