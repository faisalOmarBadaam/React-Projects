import { useState } from "react";

export default function useTecTacToe() {
  const initialBoard = () => Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard());
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [isXNext, setIsXNext] = useState(true);
  const calculateWinner = (currentBoard) => {
    for (let index = 0; index < winningPatterns.length; index++) {
      const [a, b, c] = winningPatterns[index];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  const getStatusMassage = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Player ${winner} wins!`;
    }
    if (!board.includes(null)) {
      return `it is a draw!`;
    }
    return `Player ${isXNext ? "X" : "O"} turn`;
  };
  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  return { board, handleClick, getStatusMassage, resetGame };
}
