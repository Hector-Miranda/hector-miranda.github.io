/**
 * https://dev.to/michael-gokey/flip-for-knowledge-building-a-flashcard-game-with-html-css-javascript-3o9j
 * https://codepen.io/Michael-Gokey/pen/XJJPVZZ
 */

const container = document.getElementById("flashcard-container");

Array.from(container.children).forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
