import Square from "./TicTacToeSquare";
import './style/TicTacToe.css';


interface BoardProps {
    squares: Array<'red' | 'green' | null>;
    onSquareClick: (index: number) => void;
}

const Board = ({ squares, onSquareClick }: BoardProps) => {
    return (
        <div className="board">
            {squares.map((value, index) => (
                <Square
                key={index}
                value={value}
                onClick={() => onSquareClick(index)}
                />
            ))}
        </div>
);
};

export default Board;