import React from "react";
import Square from "./TicTacToeSquare";
import './style/TicTacToe.css';


interface BoardProps {
    squares: Array<'red' | 'green' | null>;
    onSquareClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => {
    console.log(squares);
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