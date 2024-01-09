const consoles = [{ name: 'PS5', price: 299, img: 'https://phantom-marca.unidadeditorial.es/61b2c953650837654096da7c4ce78953/resize/828/f/webp/assets/multimedia/imagenes/2023/11/29/17012498369036.jpg' }, { name: 'Xbox One', price: 350, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Microsoft-Xbox-One-Console-wKinect.png' }]

function removeConsole (index) {
  consoles.splice(index, 1)
}

function addConsole (console) {
  consoles.push(console)
}

function Console (name, price, img) {
  this.name = name
  this.price = price
  this.img = img
}

export { addConsole, removeConsole, consoles, Console }
