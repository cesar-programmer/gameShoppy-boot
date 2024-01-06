import { games } from './games.js'
console.log(games)

function init () {
  const select = document.getElementById('gameTitle')
  select.innerHTML = '<option value="" disabled selected>Select a game</option>'
  select.innerHTML += games.map(game => `<option value="${game.title}">${game.title}</option>`).join('')
}

function orderComplete () {
  alert('Order completed successfully')
}

init()
window.orderComplete = orderComplete
