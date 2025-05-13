const games = [
  {
    name: "Jeu de Cartes",
    image: "assets/cartes.jpg",
    link: "jeux/cartes/index.html"
  },
  {
    name: "Labyrinthe",
    image: "assets/labyrinthe.jpg",
    link: "jeux/labyrinthe/index.html"
  },
  {
    name: "Quiz Boukistan",
    image: "assets/quiz.jpg",
    link: "jeux/quiz/index.html"
  }
];

const container = document.getElementById("game-container");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
    <img src="${game.image}" alt="${game.name}">
    <div class="info">
      <h3>${game.name}</h3>
      <button onclick="window.location.href='${game.link}'">Jouer</button>
    </div>
  `;

  container.appendChild(card);
});
