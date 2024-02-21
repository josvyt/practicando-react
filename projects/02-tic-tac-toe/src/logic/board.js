import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // Checa todas las combinaciones si X u O ganó

    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo


        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]


        ) {
            return boardToCheck[a]
        }
    }
    //Si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    //Revisamos si hay empate
    // Si no hay más espacios vacíos
    // En el tablero
    return newBoard.every((square) => square !== null)
}