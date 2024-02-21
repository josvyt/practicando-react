import { useState } from "react"
import confetti from "canvas-confetti"

import { TURNS } from "./constants.js"
import { Square } from "./components/Square.jsx"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { Board } from "./components/Board.jsx"
import { checkWinnerFrom, checkEndGame} from "./logic/board.js"
import { saveGameToStorage, resetGameStorage } from "./logic/storage/index.js"

function App() {
  //Render

  const [board, setBoard] = useState(() => {
    //Inicializa estado del board
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })


  // Nul si no hay ganador, false si hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()

  }



  const updateBoard = (index) => {
    // Si ya tiene algo, no actualizamos (no reescribe la posición)
    // o si ya hay un ganador
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guarda la partida en localstorage
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    //Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner) //Actualiza el estado
    } else if (checkEndGame(newBoard)) {    //checar si el juego ha terminado
      setWinner(false) //empate
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        <Board updateBoard={updateBoard} board={board}/>
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
}

export default App