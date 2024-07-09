import {useState} from 'react' // 'useState'  lets you create and manage values that can change over time :: like a score card
import Board from './board'

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]); // creates a state variable history with an initial value of an array containing one array of 9 null values.
    const [currentMove, setCurrentMove] = useState(0); // 'currentMove' keeps track of the current move number, setCurrentMove updates 'currentMove'
    const xIsNext = currentMove % 2 === 0; // if even 'xIsNext' will be true and X's turn, if odd, "O" turn
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove) { // nextMove represents the move number you want to jump to
      setCurrentMove(nextMove);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
