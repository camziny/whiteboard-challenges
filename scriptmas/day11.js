/**
 *🎄 Requirements:
 * - This is a classic "Find the Pair" game with a christmas theme.
 * - The player should be able to reveal cards by clicking on them.
 * - When the player reveals one card, it should stay revealed until a second card is revealed.
 * - When the player reveals two cards:
 *   - If they are the same, they should remain revealed for the rest of the game.
 *   - If they are different, they should be flipped back to hidden.
 * - The cards should be shuffled at the start of each game.
 */

/**
 * 🎅 Stretch Goals:
 * - Add a point system where points are awarded for each correctly revealed pair
 *   and deducted for each incorrect pair (you decide the exact points for each action).
 * - Implement a high-score system using the browser's local storage.
 * - Add a "Restart Game" button that appears when the game ends so the user can start over.
 */

const emojis = ["🎄", "🎁", "🎅", "☃️"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initializeGame() {
  const gameContainer = document.getElementById("game-board");
  if (!gameContainer) {
    console.error("Game container element not found.");
    return;
  }

  gameContainer.innerHTML = "";

  const cards = shuffle([...emojis, ...emojis]);
  let revealedCards = [];
  let matchedPairs = 0;
  let score = 0;

  function updateScore(points) {
    score += points;
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
      scoreElement.textContent = `Score: ${score}`;
    } else {
      console.error("Score element not found.");
    }
  }

  function handleCardClick(event) {
    const card = event.target;
    if (card.classList.contains("revealed") || revealedCards.length === 2) {
      return;
    }

    card.textContent = card.dataset.emoji;
    card.classList.add("revealed");
    revealedCards.push(card);

    if (revealedCards.length === 2) {
      const [card1, card2] = revealedCards;

      if (card1.dataset.emoji === card2.dataset.emoji) {
        matchedPairs++;
        revealedCards = [];
        updateScore(10);

        if (matchedPairs === emojis.length) {
          setTimeout(() => alert(`Game Over! Final Score: ${score}`), 500);
        }
      } else {
        updateScore(-5);
        setTimeout(() => {
          card1.textContent = "";
          card2.textContent = "";
          card1.classList.remove("revealed");
          card2.classList.remove("revealed");
          revealedCards = [];
        }, 1000);
      }
    }
  }

  cards.forEach((emoji) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.emoji = emoji;
    card.addEventListener("click", handleCardClick);
    gameContainer.appendChild(card);
  });
}

function restartGame() {
  initializeGame();
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = "Score: 0";
  } else {
    console.error("Score element not found.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const restartButton = document.getElementById("restart-button");
  if (restartButton) {
    restartButton.addEventListener("click", restartGame);
  } else {
    console.error("Restart button element not found.");
  }

  initializeGame();
});
