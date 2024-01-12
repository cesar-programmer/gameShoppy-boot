import { loadContextConsoles, loadContextGames } from './context.js'

const games = loadContextGames()
const consoles = loadContextConsoles()
// map is a method that allows us to iterate over an array and return a new array
document.getElementById('games-section').innerHTML = games.map(game => `
  <div class="game-card">
    <img src="${game.image}" alt="${game.title}">
    <h3>${game.title}</h3>
    <p>${game.category}</p>
    <p>$${game.price}</p>
  </div>
`).join('')

document.getElementById('consoles-section').innerHTML = consoles.map(console => `
  <div class="console-card">
    <img src="${console.img}" alt="${console.name}">
    <h3>${console.name}</h3>
    <p>$${console.price}</p>
  </div>
`).join('')
