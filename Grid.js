const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2

export default class Grid {
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE)
    gridElement.style.setProperty("--posicao-size", `${CELL_SIZE}vmin`)
    gridElement.style.setProperty("--posicao-gap", `${CELL_GAP}vmin`)
    createCellElements(gridElement)
  }
}

function createCellElements(gridElement) {
  const cells = []
  for(let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div")
    cell.classList.add("posicao")
    cells.push(cell)
    gridElement.append(cell)
  }
  return cells
}