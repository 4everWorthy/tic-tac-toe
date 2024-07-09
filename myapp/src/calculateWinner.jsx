function calculateWinner(squares) {
    const lines = [ // squares on the board, colums, rows and diagonal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
      return null;
  }
  export default calculateWinner

//   calculateWinner checks if there is a winning combination on the tic-tac-toe board.
// It goes through all possible winning combinations.
// If it finds a winning combination, it returns the winner ('X' or 'O').
// If there is no winner, it returns null.