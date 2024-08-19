import React from "react";
import Card, { CardType } from './Card';



export interface BoardProps {
    cards: CardType[];
    onCardClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ cards, onCardClick }) => {
    return (
        <>
            <div className="board">
                {cards.map((card, index) => (
                    <Card key={index} card={card} onClick={() => onCardClick(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default Board;