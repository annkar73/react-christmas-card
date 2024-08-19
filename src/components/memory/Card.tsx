import React from "react";

interface Card {
    id: number;
    value: string;
    isFlipped: boolean;
    isMatched: boolean;
}

interface CardProps {
    card: Card;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ card, onClick }) => {
    return (
        <>
            <div className={`card ${card.isFlipped ? 'flipped' : ''}`} onClick={onClick}>
                { card.isFlipped || card.isMatched : ? (
                    <img src={card.image} alt="card" />
                ) : (
                    <div className="card-back"></div>
                )}
            </div>
        </>
    );
};

export default Card;