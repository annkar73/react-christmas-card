import { useState } from 'react';
import Board from '../components/tictactoe/TicTacToeBoard';
import '../components/tictactoe/style/TicTacToe.css';

const Game = () => {
  const [squares, setSquares] = useState<Array<'red' | 'green' | null>>(Array(9).fill(null));
  const [isRedNext, setIsRedNext] = useState(true);

  const handleSquareClick = (index: number) => {
    const newSquares = squares.slice();
    if (newSquares[index] || calculateWinner(newSquares)) return;

    newSquares[index] = isRedNext ? 'red' : 'green';
    setSquares(newSquares);
    setIsRedNext(!isRedNext);
  };

  const winner = calculateWinner(squares);
  const isDraw = squares.every(square => square !== null) && !winner;
  const status = winner 
  ? `Vinnare: ${winner}` 
  : isDraw
  ? `Oavgjort!`
  : `Nästa spelare: ${isRedNext ? 'Röd' : 'Grön'}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsRedNext(true);
  };


  return (
    <>
    <div className="game">
      <h1 className="game-title">Tre i rad</h1>
      <div className="status">{status}</div>
      <Board squares={squares} onSquareClick={handleSquareClick} />
      {(winner || isDraw) && (
        <button className='reset-button' onClick={resetGame}>Spela igen</button>
      )}
    </div>
    </>
  );
};

const calculateWinner = (squares: Array<'red' | 'green' | null>): 'red' | 'green' | null => {
  const lines = [
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
};

export default Game;
