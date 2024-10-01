let deck = [

];

let playerOneCards = [];
let playerTwoCards = [];
let playedCards = [];

let turn = "player1";

const playerOneCardsDiv = document.querySelector(".player1-cards");
const playerTwoCardsDiv = document.querySelector(".player2-cards");
const startGame = document.getElementById("btn-start");
const table = document.querySelector(".table");
const playedCardsDiv = document.querySelector(".played-cards");

const colors = ["red", "blue", "green", "yellow"];
const specialCards = ["+", "2+", "עצור", "שנה כיוון", "שנה צבע", "טאקי"];

startGame.addEventListener("click", () => {
    startGame.style.display = "none";
    table.style.display = " flex";
    dealCards();
})



colors.forEach(color => {
    for (let j = 0; j < 2; j++) {
        for (let i = 1; i < 10; i++) {
            deck.push({ color, value: i });
        }

        specialCards.forEach(card => {
            deck.push({ color, value: card });
            for (let i = 1; i < 5; i++) {

            }
        });
    }
});

deck = deck.filter(card => card.value !== 2);

for (let i = 0; i < 4; i++) {
    deck.push({ value: "סופר טאקי" })
}


const showCards = document.querySelector(".show-cards");

deck.forEach(card => {
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const spanNum = document.createElement("span");
    spanNum.innerHTML = card.value;
    spanNum.style.color = card.color
    spanNum.setAttribute("card", card.value)
    spanNum.style.textShadow = "2px 2px 2px black"
    spanNum.style.fontWeight = "bold"


    divCard.appendChild(spanNum);

    showCards.appendChild(divCard);
})




const allCards = document.querySelectorAll(".card");

let shuffledCards = [...allCards]

for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
}

const cardBank = document.querySelector(".card-bank");

function dealCards() {

    playerOneCards = shuffledCards.splice(0, 8)

    playerOneCards.forEach(card => {
        playerOneCardsDiv.appendChild(card);
    })

    playerTwoCards = shuffledCards.splice(0, 8)

    playerTwoCards.forEach(card => {
        playerTwoCardsDiv.appendChild(card)
    })

    playerOneCards.forEach(c => c.addEventListener("click", () => playHand(c)));
    playerTwoCards.forEach(c => c.addEventListener("click", () => playHand(c)));
}



function playHand(ev) {
    if (turn === "player1") {
        playerOneCards.splice(playerOneCards.indexOf(ev), 1);
        playedCards.push(ev);
        playedCardsDiv.appendChild(ev);
        turn = "player2";
    } else if (turn === "player2") {
        playerTwoCards.splice(playerTwoCards.indexOf(ev), 1);
        playedCards.push(ev);
        playedCardsDiv.appendChild(ev);
        turn = "player1";
    }
}

