import confetti from 'canvas-confetti'
import { useState } from 'react'
import { Square } from './components/Square.jsx'
import {
  TURNS,
  initialBoard,
  initialTurn,
  initialGameState
} from './constants/constants.js'
import { checkWinner } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App () {
  const [board, setBoard] = useState(initialBoard)
  const [turn, setTurn] = useState(initialTurn)
  const [gameState, setGameState] = useState(initialGameState)

  const resetGame = () => {
    setBoard(initialBoard)
    setTurn(initialTurn)
    setGameState(initialGameState)
  }

  const updateBoard = (row, col) => {
    // check if the square already has a value
    if (board[row][col]) return
    // check game state
    if (gameState.isFinished) return

    // update board with current move
    const newBoard = structuredClone(board)
    newBoard[row][col] = turn
    setBoard(newBoard)

    // update state
    let { isFinished, winner, progress } = structuredClone(gameState)
    progress[turn].rows[row] += 1
    progress[turn].cols[col] += 1
    if (row === col) progress[turn].diagonals[0] += 1
    if (row === 2 - col) progress[turn].diagonals[1] += 1
    // check for winner and update state
    isFinished = checkWinner(progress[turn])
    if (isFinished) {
      winner = turn
      confetti()
    }
    // check for draw
    progress.squares.taken += 1
    if (progress.squares.taken === progress.squares.total) isFinished = true
    setGameState({ isFinished, winner, progress })

    // change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {board.map((rows, row) =>
          rows.map((_, col) => {
            return (
              <Square
                key={[row, col]}
                index={[row, col]}
                updateBoard={updateBoard}
              >
                {board[row][col]}
              </Square>
            )
          })
        )}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section>
        <button onClick={resetGame}>Reset</button>
      </section>

      <WinnerModal gameState={gameState} resetGame={resetGame} />
    </main>
  )
}

export default App
