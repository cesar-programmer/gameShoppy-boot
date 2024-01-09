/* eslint-disable no-undef */
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

  $('#notifications').hide()
}

function removeGameList (index) {
  removeGame(index)
  renderGames()
  showNotification('notifications', 'Game removed successfully', 'alert-success')
}

function formSubmit () {
  const gameTitle = document.getElementById('name').value
  const gameGenre = document.getElementById('description').value
  const priceG = Number(document.getElementById('price').value)
  const imageG = document.getElementById('image').value
  const categoryG = document.getElementById('category').value

  if (!gameTitle || !gameGenre || !priceG || !imageG || !categoryG) {
    showNotification('notifications', 'Please fill all the fields', 'alert-danger')
    return
  }

  const newGame = new Game(gameTitle, gameGenre, priceG, imageG, categoryG)

  addGame(newGame)

  renderGames()

  // this line is jquery syntax showing the notification when the game is added
  showNotification('notifications', 'Game added successfully', 'alert-success')
  document.getElementById('game-form').reset()
}

function showNotification (id, message, type) {
  $(`#${id}`).removeClass('alert-success')
  $(`#${id}`).removeClass('alert-danger')
  $(`#${id}`).text(message).addClass(type).slideDown(300).delay(3000).slideUp(300)
}

document.addEventListener('DOMContentLoaded', renderGames)

window.formSubmit = formSubmit
window.removeGameList = removeGameList
