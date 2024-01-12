import { loadContextGames } from './context.js'

const games = loadContextGames()
const price = document.getElementById('totalAmount')

function init () {
  const select = document.getElementById('gameTitle')
  select.innerHTML = '<option value="" disabled selected>Select a game</option>'
  select.innerHTML += games.map((game) => `<option value="${game.title}" data-price="${game.price}">${game.title}</option>`).join('')

  // add event listener to the select element to update the total when the value changes
  select.addEventListener('change', updateTotal)
}

function updateTotal () {
  const select = document.getElementById('gameTitle')
  // here we take the selected option from the select element
  const selectedOption = select.options[select.selectedIndex]
  // here we take the price from the selected option and convert it to a float
  const selectedPrice = parseFloat(selectedOption.dataset.price || 0)
  // here we take the value from the quantity input and convert it to an integer
  const quantity = parseInt(document.getElementById('quantity').value, 10) || 0
  const total = selectedPrice * quantity

  price.textContent = `$${total.toFixed(2)}`
}

function orderComplete () {
  alert('Order completed successfully')
}

init()
window.orderComplete = orderComplete
