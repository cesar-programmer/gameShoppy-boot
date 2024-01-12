/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { addConsole, removeConsole, Console, consoles } from './consoles.js'
import { saveContextConsoles, loadContextConsoles, deleteContextConsoles } from './context.js'

function renderConsoles () {
  const consolesContainer = document.getElementById('console-section')
  const counterContainer = document.getElementById('counter')

  const consolesSave = loadContextConsoles()

  consolesContainer.innerHTML = ''
  const amount = consolesSave.reduce((acc, console) => acc + console.price, 0)
  counterContainer.innerHTML = `<p>Total consoles: ${consolesSave.length}</p><p>Total amount: $${amount}</p>`

  consolesContainer.innerHTML = consolesSave.map((console, index) => `
    <div class="console-card">
      <img src="${console.img}" alt="${console.name}">
      <h3>${console.name}</h3>
      <p>$${console.price}</p>
      <button onclick="removeConsoleList('${index}')">Remove</button>
    </div>
  `
  ).join('')
  $('#notifications').hide()
  $('#btnRegister').on('click', formSubmit)
}

function removeConsoleList (index) {
  removeConsole(index)
  deleteContextConsoles(index)
  renderConsoles()
  showNotification('notifications', 'Console removed successfully', 'alert-success')
}

function formSubmit () {
  const consoleName = document.getElementById('name').value
  const priceC = Number(document.getElementById('price').value)
  const imageC = document.getElementById('image').value

  if (!consoleName || !priceC || !imageC) {
    showNotification('notifications', 'Please fill all the fields', 'alert-danger')
    return
  }

  const newConsole = new Console(consoleName, priceC, imageC)

  addConsole(newConsole)

  saveContextConsoles(consoles)

  renderConsoles()

  // this line is jquery syntax showing the notification when the game is added
  showNotification('notifications', 'Console added successfully', 'alert-success')
  document.getElementById('game-form').reset()
}

function showNotification (id, message, type) {
  $(`#${id}`).removeClass('alert-success')
  $(`#${id}`).removeClass('alert-danger')
  $(`#${id}`).text(message).addClass(type).slideDown(300).delay(3000).slideUp(300)
}

document.addEventListener('DOMContentLoaded', renderConsoles)

window.formSubmit = formSubmit
window.removeConsoleList = removeConsoleList
