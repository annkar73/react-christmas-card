import React from "react";
import Square from "./Square";
import './style/TicTacToe.css';


interface BoardProps {
    squares: Array<'red' | 'green' | null>;
    onSquareClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => {
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