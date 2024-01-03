import { addGame, games, removeGame } from './games.js'

// Función para renderizar las tarjetas de juegos
function renderGames () {
  const gamesContainer = document.getElementById('games-section')

  gamesContainer.innerHTML = ''

  gamesContainer.innerHTML = games.map((game, index) => `
    <div class="game-card">
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <p>${game.category}</p>
      <p>$${game.price}</p>
      <button onclick="removeGameList('${index}')">Remove</button>
    </div>
  `).join('')
}

function removeGameList (index) {
  removeGame(index)
  renderGames()
}

// Función para manejar el envío del formulario
function formSubmit () {
  const gameTitle = document.getElementById('name').value
  const gameGenre = document.getElementById('description').value
  const priceG = Number(document.getElementById('price').value)
  const imageG = document.getElementById('image').value
  const categoryG = document.getElementById('category').value

  const newGame = {
    title: gameTitle,
    genre: gameGenre,
    price: priceG,
    image: imageG,
    category: categoryG
  }

  addGame(newGame)

  // Renderiza las tarjetas de juegos actualizadas
  renderGames()

  // Limpia el formulario
  document.getElementById('game-form').reset()
  alert('Game added successfully')
}

// Llama a la función para renderizar las tarjetas al cargar la página
document.addEventListener('DOMContentLoaded', renderGames)

// Exponer la función formSubmit al ámbito global
window.formSubmit = formSubmit
window.removeGameList = removeGameList
