/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { addConsole, removeConsole, consoles, Console } from './consoles.js'

function renderConsoles () {
  const consolesContainer = document.getElementById('console-section')
  const counterContainer = document.getElementById('counter')
  consolesContainer.innerHTML = ''
  counterContainer.innerHTML = `<p>Total consoles: ${consoles.length}</p>`
  consolesContainer.innerHTML = consoles
    .map(
      (console, index) => `
    <div class="console-card">
      <img src="${console.img}" alt="${console.name}">
      <h3>${console.name}</h3>
      <p>$${console.price}</p>
      <button onclick="removeConsoleList('${index}')">Remove</button>
    </div>
  `
    )
    .join('')
  $('#notifications').hide()
  $('#btnRegister').on('click', formSubmit)
}

function removeConsoleList (index) {
  removeConsole(index)
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
