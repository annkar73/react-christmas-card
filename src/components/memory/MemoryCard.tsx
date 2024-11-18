
export interface CardType {
    image: string;
    isFlipped: boolean;
    isMatched: boolean;
}

interface CardProps {
    card: CardType;
    onClick: () => void;
}

const Card  = ({ card, onClick }: CardProps) => {
    return (
        <>
            <div className={`card ${card.isFlipped ? 'flipped' : ''}`} onClick={onClick}>
                {card.isFlipped || card.isMatched ? (
                    <img src={card.image} alt="card" />
                ) : (
                    <div className="card-back"></div>
                )}
            </div>
        </>
    );
};

export default Card;