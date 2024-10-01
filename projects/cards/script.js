const suits = ['C', 'D', 'H', 'S'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];

function createDeck() {
    deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({
                rank: rank,
                suit: suit,
                image: `cards_images/JPEG/${rank}${suit}.jpg`
            });
        }
    }
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCards() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j <= i; j++) {
            const card = document.createElement('div');
            card.classList.add('card', 'back');
            card.style.backgroundImage = `url('cards_images/JPEG/blue_back.jpg')`;
            gameBoard.appendChild(card);
        }
    }
}

function restartGame() {
    createDeck();
    shuffleDeck();
    dealCards();
}

document.addEventListener('DOMContentLoaded', () => {
    restartGame();
});
