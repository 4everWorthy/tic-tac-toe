// import {useState} from "react";
import Square from "./square";
import calculateWinner from "../calculateWinner";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) { // 'i' represents the index of the square that gets clicked
    if (calculateWinner(squares) || squares[i]) { // checks 'if' there is already a winner or if the square at index 'i' is already filled
      return;
    }
    const nextSquares = squares.slice(); // creates a copy of the squares array called nextSquares.
    if (xIsNext) { //checks if it's X's turn (xIsNext).
      nextSquares[i] = 'X';  // if true, is set to 'X'
    } else {
      nextSquares[i] = 'O';  // if false, is set to 'X'
    }
    onPlay(nextSquares); // calls the onPlay function on line 5
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

