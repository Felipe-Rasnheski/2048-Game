import Grid from "./Grid.js"
import Tile from "./Tile.js"
const gameBoard = document.getElementById("tabuleiro-jogo")

const grid = new Grid(gameBoard)

grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)