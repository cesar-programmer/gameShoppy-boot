import { games } from './games.js'
console.log(games)

document.getElementById('games-section').innerHTML = games.map(game => `
  <div class="game-card">
    <img src="${game.image}" alt="${game.title}">
    <h3>${game.title}</h3>
    <p>${game.category}</p>
    <p>$${game.price}</p>
  </div>
`).join('')
