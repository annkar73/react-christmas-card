import React, { useEffect, useState } from 'react';
import '../../styles/MemoryGame.css';
import Board from '../tictactoe/Board';

interface Card {
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndicies] = useState<number[]>([]);

  useEffect(() => {

    const initialCards: Card[] = [
      { value: 'A', isFlipped: false, isMatched: false },
      { value: 'A', isFlipped: false, isMatched: false },

      { value: 'B', isFlipped: false, isMatched: false },
      { value: 'B', isFlipped: false, isMatched: false },

      { value: 'C', isFlipped: false, isMatched: false },
      { value: 'C', isFlipped: false, isMatched: false },

      { value: 'D', isFlipped: false, isMatched: false },
      { value: 'D', isFlipped: false, isMatched: false },


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

    if (newCards[firstIndex].value === newCards[secondIndex].value) {
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
