const divs = document.querySelectorAll("#board>div");
let isRed = true;
let isGameOver = false;

const scores = {
    x: localStorage.x ? Number(localStorage.x) : 0,
    o: localStorage.o ? Number(localStorage.o) : 0,
};

document.querySelector("#x_score").innerText = scores.x;
document.querySelector("#o_score").innerText = scores.o;

// לולאה העוברת על כל המשבצות
divs.forEach(div => {
    // הוספת פונקציה המופעלת בעת לחיצה על אחת המשבצות
    div.addEventListener("click", ev => {
        if (isGameOver) {
            return;
        }

        // האלמנט שעליו לחץ השחקן
        const elem = ev.target;

        // אם המשבצת מלאה, הפונקציה נעצרת
        if (elem.innerText) {
            return;
        }

        if (isRed) {
            elem.innerText = "0";
        } else {
            elem.innerText = "O";
        }

        // שינוי תור
        isX = !isX;
        // הפעלת הפונקציה של המחווה הויזואלית
        showTurn();
        checkWinner();
    });
})

/**
 * פונקציה הנותנת מחווה של איזה שחקן התור הנוכחי
 */
function showTurn() {
    // קודם כל, הסרנו את הקלאס מהשחקן האחרון
    document.querySelector('.currentTurn').classList.remove('currentTurn');

    // שם את הקלאס בהתאם לתור השחקן
    if (isRed) {
        document.querySelector("#players>div:first-child").classList.add('currentTurn');
    } else {
        document.querySelector("#players>div:last-child").classList.add('currentTurn');
    }
}

function checkWinner() {
    // מערך של מערכים של מיקומים אפשריים לניצחון
    const options = [
        [0,1,2,3],
        [5,6,7,8],
        [10,11,12,13],
        [15,16,17,18],
        [1,2,3,4],
        [6,7,8,9],
        [11,12,13,14],
        [16,17,18,19],
        [0,5,10,15],
        [1,6,11,16],
        [2,7,12,17],
        [3,8,13,18],
        [4,9,14,19],
        [0,6,12,18],
        [1,7,13,19],
        [4,8,12,16],
        [3,7,11,15]
    ];

    // רץ על המערך של כל האופציות
    for (const op of options) {
        // בודק את המיקומים של כל מערך
        if (op.every(x => divs[x].innerText === 'X')) {
            scores.x++;
            winner(op, 'X');
            document.querySelector("#x_score").innerText = scores.x;
            break;
        } else if (op.every(x => divs[x].innerText === 'O')) {
            scores.o++;
            winner(op, 'O');
            document.querySelector("#o_score").innerText = scores.o;
            break;
        }
    }

    if (!isGameOver && [...divs].every(x => x.innerText)) {
        setTimeout(() => alert("אין מנצח"), 50);
        isGameOver = true;
    }
}

function winner(op, win) {
    setTimeout(() => alert(win + " is winner!"), 50);

    op.forEach(x => divs[x].classList.add('win'));

    isGameOver = true;

    localStorage.x = scores.x;
    localStorage.o = scores.o;
    
    // כשיש ניצחון, מאפשרים לשחקן המנצח להתחיל
    isX = !isX;
}

function newGame() {
    divs.forEach(div => {
        div.innerText = '';
        div.classList.remove('win');
    });

    isGameOver = false;
    showTurn();
}