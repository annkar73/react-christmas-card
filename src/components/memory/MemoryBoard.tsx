import { CardType } from './MemoryCard';



export interface BoardProps {
    cards: CardType[];
    onCardClick: (index: number) => void;
}

const MemoryBoard = ({ cards, onCardClick }: BoardProps) => {
    return (
      <div className="memory-board">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
            onClick={() => onCardClick(index)}
          >
            {card.isFlipped || card.isMatched ? (
              <img src={card.image} alt="card" />
            ) : (
              <div className="card-back"></div> 
            )}
          </div>
        ))}
      </div>
    );
  };
export default MemoryBoard;