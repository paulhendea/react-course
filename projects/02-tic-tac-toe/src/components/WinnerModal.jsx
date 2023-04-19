import { Square } from "./Square"

export function WinnerModal({ gameState, resetGame }) {
  if (!gameState.isFinished) return null

  const winnerText = gameState.winner === null ? 'Draw' : 'Winner'

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {gameState.winner && <Square>{gameState.winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Reset</button>
        </footer>
      </div>
    </section>
  )
}
