const games = [
  { title: 'Super mario', price: 20, image: 'https://wallpaperaccess.com/full/2879674.jpg', category: 'adventure' },
  { title: 'Zelda', price: 30, image: 'https://gamingbolt.com/wp-content/uploads/2022/09/the-legend-of-zelda-tears-of-the-kingdom-1.jpg', category: 'adventure' },
  { title: 'Street fighter', price: 10, image: 'https://virtualbackgrounds.site/wp-content/uploads/2020/11/street-fighter-ii-ryus-stage.jpg', category: 'fighting' }
]

function addGame (game) {
  games.push(game)
}

function removeGame (index) {
  console.log(index)
  // here use the indexOf method to find the index of the game we want to remove
  games.splice(index, 1)
}

function Game (title, genre, price, image, category) {
  this.title = title
  this.genre = genre
  this.price = price
  this.image = image
  this.category = category
}

export { addGame, removeGame, games, Game }
