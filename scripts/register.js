import { addGame, games, removeGame, Game } from './games.js'

function renderGames () {
  const gamesContainer = document.getElementById('games-section')
  const counterContainer = document.getElementById('counter')

  gamesContainer.innerHTML = ''

  counterContainer.innerHTML = `<p>Total games: ${games.length}</p>`

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

function formSubmit () {
  const gameTitle = document.getElementById('name').value
  const gameGenre = document.getElementById('description').value
  const priceG = Number(document.getElementById('price').value)
  const imageG = document.getElementById('image').value
  const categoryG = document.getElementById('category').value

  if (!gameTitle || !gameGenre || !priceG || !imageG || !categoryG) {
    alert('Please fill in all fields')
    return
  }

  const newGame = new Game(gameTitle, gameGenre, priceG, imageG, categoryG)

  addGame(newGame)

  renderGames()

  document.getElementById('game-form').reset()
  alert('Game added successfully')
}

document.addEventListener('DOMContentLoaded', renderGames)

window.formSubmit = formSubmit
window.removeGameList = removeGameList
