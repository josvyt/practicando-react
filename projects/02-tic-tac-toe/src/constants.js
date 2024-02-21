export const TURNS = { //Turnos
    X: '✕',
    O: '○'
  }
  
  /* Array de poscisiones */
  // const board = Array(9).fill()
  
  
  
  //Array de posiciones ganadoras
  export const WINNER_COMBOS = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
  ]