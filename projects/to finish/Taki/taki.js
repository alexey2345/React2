let deck = [];
let playerOneCards = [];
let playerTwoCards = [];

const table = document.querySelector(".table");
const btnStart = document.getElementById("btn-start");
const playerOneCardsDiv = document.querySelector(".player1-cards");
const playerTwoCardsDiv = document.querySelector(".player2-cards");

const colors = ["red", "blue", "green", "yellow"];
const specialCards = ["+", "2+", "עצור", "שנה כיוון", "שנה צבע", "טאקי"];

colors.forEach(color => {
    for (let i = 1; i < 10; i++) {
        deck.push({ color, value: i });

    }
    specialCards.forEach(card => {
        deck.push({ color, value: card });
    });
});

deck.push({ value: "סופר טאקי" });
deck.push({ value: "סופר טאקי" });

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function dealCards(deck) {
    playerOneCards = deck.splice(0, 8);
    playerTwoCards = deck.splice(0, 8);
}

function startGame() {
    btnStart.style.display = "none";
    table.style.display = "flex";
    shuffle(deck);
    dealCards(deck);
    currentGameCard = deck.pop();
    renderGame();
}

function renderGame() {
    playerOneCardsDiv.innerHTML = '';
    playerTwoCardsDiv.innerHTML = '';

    playerOneCards.forEach(card => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.innerHTML = card.value;
        divCard.style.backgroundColor = card.color;
        playerOneCardsDiv.appendChild(divCard);
    });

    playerTwoCards.forEach(card => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.innerHTML = card.value;
        divCard.style.backgroundColor = card.color;
        playerTwoCardsDiv.appendChild(divCard);
    });

    document.getElementById("deck").innerHTML = `קלפים שנותרו: ${deck.length}`;
}

startGame()