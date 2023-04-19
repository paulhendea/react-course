const cross = '❌'
const circle = '⭕'

export const TURNS = {
  X: cross,
  O: circle,
}

export const initialBoard = Array.from({ length: 3 }, (e) =>
  Array(3).fill(null)
)

export const initialTurn = TURNS.X

export const initialGameState = {
  isFinished: false,
  progress: {
    [cross]: { rows: [0, 0, 0], cols: [0, 0, 0], diagonals: [0, 0] },
    [circle]: { rows: [0, 0, 0], cols: [0, 0, 0], diagonals: [0, 0] },
    squares: { total: 9, taken: 0 },
  },
  winner: null,
}
