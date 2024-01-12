function saveContextGames (array) {
  localStorage.setItem('contextGames', JSON.stringify(array))
}

function loadContextGames () {
  // here we are using a logical OR operator to return an empty array if the local storage is empty
  return JSON.parse(localStorage.getItem('contextGames')) || []
}

function deleteContextGames (index) {
  const games = loadContextGames()
  games.splice(index, 1)
  saveContextGames(games)
}

function saveContextConsoles (array) {
  localStorage.setItem('contextConsoles', JSON.stringify(array))
}

function loadContextConsoles () {
  // here we are using a logical OR operator to return an empty array if the local storage is empty
  return JSON.parse(localStorage.getItem('contextConsoles')) || []
}

function deleteContextConsoles (index) {
  const consoles = loadContextConsoles()
  consoles.splice(index, 1)
  saveContextConsoles(consoles)
}

export {
  saveContextGames,
  loadContextGames,
  deleteContextGames,
  saveContextConsoles,
  loadContextConsoles,
  deleteContextConsoles
}
