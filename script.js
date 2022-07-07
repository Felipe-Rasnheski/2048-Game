import Grid from "./Grid.js"
import Tile from "./Tile.js"
const gameBoard = document.getElementById("tabuleiro-jogo")

const grid = new Grid(gameBoard)

grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)
setInput()

function setInput() {
  window.addEventListener("keydown", handleInput, { once: true})
}

function handleInput(e) {
  console.log(e.key)
  switch(e.key) {
    case "ArrowUp":
      moveUp()
      break
    case "ArrowDown":
      moveDown()
      break
    case "ArrowLeft":
      moveLeft()
      break
    case "ArrowRight":
      moveRight()
      break
    default: 
      setInput()
      return
  }
  setInput()
}

