// Liste des jeux
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

// Gestion du profil
const profileSetup = document.getElementById("profile-setup");
const gameHub = document.getElementById("game-hub");
const welcomeText = document.getElementById("welcome-text");
const gameContainer = document.getElementById("game-container");
const emojiRegex = /\p{Emoji}/u;

document.getElementById("createProfile").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const emoji = document.getElementById("emoji").value.trim();

  if (username.length < 2) {
    alert("Le nom doit contenir au moins 2 caractères.");
    return;
  }

  if (!emojiRegex.test(emoji)) {
    alert("Veuillez entrer un emoji valide (ex: 🎮, 👾, 🧙‍♂️).");
    return;
  }

  const profile = { username, emoji };
  localStorage.setItem("delta_profile", JSON.stringify(profile));
  showHub(profile);
});

// Affiche le hub si profil existe déjà
window.onload = () => {
  const savedProfile = localStorage.getItem("delta_profile");
  if (savedProfile) {
    showHub(JSON.parse(savedProfile));
  }
};

// Afficher le hub et les jeux
function showHub(profile) {
  profileSetup.style.display = "none";
  gameHub.style.display = "block";

  welcomeText.textContent = `${profile.emoji} Bonjour, ${profile.username} !`;

  // Génération dynamique des cartes de jeux
  gameContainer.innerHTML = "";
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
    gameContainer.appendChild(card);
  });
}
