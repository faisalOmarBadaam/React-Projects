import "./style.css";
import useTecTacToe from "./useTecTacToe";
export default function TecTacToe() {
  const { board, handleClick, resetGame, getStatusMassage } = useTecTacToe();
  return (
    <div className="container">
      <div className="status">{getStatusMassage()}</div>
      <button onClick={resetGame} className="reset-btn">
        Reset Game
      </button>

      <div className="board">
        {board.map((ceil, index) => (
          <button
            onClick={() => handleClick(index)}
            className="cell"
            key={index}
            disabled={ceil !== null}
          >
            {ceil}
          </button>
        ))}
      </div>
    </div>
  );
}
