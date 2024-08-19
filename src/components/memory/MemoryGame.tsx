import React, { useEffect, useState } from 'react';
import './style/MemoryGame.css';
import Board from '../memory/MemoryBoard';
import { CardType } from './MemoryCard';

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedIndices, setFlippedIndicies] = useState<number[]>([]);

  useEffect(() => {

    const initialCards: CardType[] = [
      { image: 'A', isFlipped: false, isMatched: false },
      { image: 'A', isFlipped: false, isMatched: false },

      { image: 'B', isFlipped: false, isMatched: false },
      { image: 'B', isFlipped: false, isMatched: false },

      { image: 'C', isFlipped: false, isMatched: false },
      { image: 'C', isFlipped: false, isMatched: false },

      { image: 'D', isFlipped: false, isMatched: false },
      { image: 'D', isFlipped: false, isMatched: false },
      
      { image: 'A', isFlipped: false, isMatched: false },
      { image: 'A', isFlipped: false, isMatched: false },

      { image: 'B', isFlipped: false, isMatched: false },
      { image: 'B', isFlipped: false, isMatched: false },

      { image: 'C', isFlipped: false, isMatched: false },
      { image: 'C', isFlipped: false, isMatched: false },

      { image: 'D', isFlipped: false, isMatched: false },
      { image: 'D', isFlipped: false, isMatched: false },


    ];

    const shuffledCards = initialCards.sort(() => Math.random() -0.5);
    setCards(shuffledCards);
  }, []);

const handleCardClick = (index: number) => {
  const newFlippedIndices = [...flippedIndices, index];
  setFlippedIndicies(newFlippedIndices);

  if (newFlippedIndices.length === 2) {
    const [firstIndex, secondIndex] = newFlippedIndices;
    const newCards = [...cards];

    if (newCards[firstIndex].image === newCards[secondIndex].image) {
      newCards[firstIndex].isMatched = true;
      newCards[secondIndex].isMatched = true;
      setCards(newCards);
    } else {
      setTimeout(() => {
        newCards[firstIndex].isFlipped = false;
        newCards[secondIndex].isFlipped = false;
        setCards(newCards);
      }, 1000);
    }
  }
};

  return (
  <>
    <div className='memory-game'>
      <h1>Memory</h1>
      <Board cards={cards} onCardClick={handleCardClick} />
    </div>
  </>
  );
};

export default MemoryGame;
